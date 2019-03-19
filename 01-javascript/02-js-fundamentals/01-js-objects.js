let students = [
		    {name: 'Remy', cohort: 'Jan'},
		    {name: 'Genevieve', cohort: 'March'},
		    {name: 'Chuck', cohort: 'Jan'},
		    {name: 'Osmund', cohort: 'June'},
		    {name: 'Nikki', cohort: 'June'},
		    {name: 'Boris', cohort: 'June'}
		];


        function studentList(arr){
        	for(let i = 0; i < arr.length; i++){
        		console.log("Name: " + arr[i]['name'] +" , "+ "Cohort: " + arr[i]['cohort']);
        	}
        }

        studentList(students);



        let users = {
		    employees: [
		        {'first_name':  'Miguel', 'last_name' : 'Jones'},
		        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
		        {'first_name' : 'Nora', 'last_name' : 'Lu'},
		        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
		    ],
		    managers: [
		       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
		       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
		    ]
    	};

    	function usersList(users){
    		for(let position in users){
    			console.log(position.toUpperCase());
    		
	    		let i = 1;

	    		for(let user in users[position]){
	    			let name= users[position][user]['first_name']+ ' ' + users[position][user]['last_name'];
	    			console.log(i + ' ' + name.toUpperCase() + ' ' + name.length);
	    			i++;
	    		}
    		}
    	}

    	usersList(users);