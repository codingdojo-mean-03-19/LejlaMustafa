$(document).ready(function(){
    const app = document.getElementById('main');

    let search;
    $('#peopleBtn').click(() => {
        search = '/people/0';
        $('#placeholder').empty();
        // let's make the request to our OWN server!
        $.ajax({
            url: search,
            dataType: 'json',
            success: (data) => {
                let people = data.results;
                for (person of people){
                    $('#placeholder').append(`<li>${person.name}</li>`);
                }
                console.log('success data is: ', data);
                display(data);
            }
        });
        return false;
    });
    $('#planetBtn').click(() => {
        search = '/planets/0';
        $('#placeholder').empty();
        // let's make the request to our OWN server!
        $.ajax({
            url: search,
            dataType: 'json',
            success: (data) => {
                let planets = data.results;
                for (planet of planets){
                    $('#placeholder').append(`<li>${planet.name}</li>`);
                }
                // console.log('success data is: ', data);
                display(data);
            }
        });
        return false;
    });

    $('#next').click(() => {
        console.log('clicking next');
        $.get('/next', (data) => { 
            display(data); 
        }, 'json');
    });

    $('#prev').click(() => {
        console.log('clicking prev');
        $.get('/prev', (data) => {
            display(data);
        }, 'json');
    });

    // $('#placeholder')[0].onchange = () => {
    //     console.log('change noted');
    //     // return count;
    // }
    // const target = $('#placeholder')[0].childElementCount;
    // $('.navigation').toggle();

    function display(info){
        $('#all').removeAttr('hidden');

        if(info.next != null) {
            $('#next').removeAttr('hidden');
        } else {
            $('#next').attr('hidden', 'hidden')
        }

        if(info.previous != null) {
            $('#prev').removeAttr('hidden');
        } else {
            $('#prev').attr('hidden', 'hidden')
        }

        let build = '';
        for(let i = 0; i < info.results.length; i++){
            build += `<li> ${info.results[i].name} </li>`;
        }

        $('#placeholder').html(build)
        setTimeout(() => {
            $('#info').scroll(bottom);
        }, 500);
    }

    $('#all').click(function() {
        $('#info').unbind('scroll');
        $('#loading').removeAttr('hidden');
    });

    function bottom(){
        console.log('*');
        if($('#info').scrollTop() + $('#info').height() >= $('#info').children().height() + 15){
            console.log(`*****************`)
            $('#info').unbind('scroll');
            add();
        }
    }
    function add(){
        $('#loading').removeAttr('hidden');
        $.get('/next', (data) => {
            let build = '';
            for(let i = 0; i < data.results.length; i++){
                build += `<li> ${data.results[i].name} </li>`
            }
            console.log(data);
            $('#content').append(build);
            $('#loading').attr('hidden', 'hidden');
            $('#info').scroll(bottom);
        }, 'json');
    }
});