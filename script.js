const employees = {
    'ewe030': {
        name: 'Abhishek Kumar',
        position: 'Frontend Developer',
        bio: 'Passionate about coding...',
        imageUrl: 'https://drive.google.com/uc?id=180xIoRDiijt1KbwTUvQZm0kSV5kDgPLe',
        id: 'EWE030',
        email: 'abhishek.kumar@elewayte.com',
        phone: '+91 9631035342',
        bloodGroup: 'B+',
        address: 'Grubstay Arizona',
        dob: '04/11/2000',
        joiningDate: 'January 19, 2023'
    },
    'ewe003': {
        name: 'Priyanka Mishra',
        position: 'Senior Manager',
        bio: 'Money Money Money',
        imageUrl: 'https://drive.google.com/uc?id=1I0VzHcI7IqWe0kZ858iNFLl5O7YFSfDI',
        id: 'EWE003',
        email: 'priyanka@elewayte.com',
        phone: '+91 6383453564',
        bloodGroup: 'O+',
        address: 'Day "N" Night',
        dob: '14/09/1995',
        joiningDate: 'May 15, 2022'
    },
    'ewe001': {
        name: 'Akash Ghosh',
        position: 'Co Founder & Associate VP BD',
        bio: 'Money Money Money',
        imageUrl: 'https://drive.google.com/uc?id=18n5-ZKURfZEmCIh23O1YI2Qr-WKQQrcP',
        id: 'EWE001',
        email: 'akash@elewayte.com',
        phone: '+91 7358003952',
        bloodGroup: 'O+',
        address: 'Day "N" Night',
        dob: '11/03/1998',
        joiningDate: 'Feb 15, 2022'
    },
    'ewe012': {
        name: 'SANTHOSH KUMAR S',
        position: 'Business Development Associate',
        bio: 'Money Money Money',
        imageUrl: 'https://drive.google.com/uc?id=18n5-ZKURfZEmCIh23O1YI2Qr-WKQQrcP',
        id: 'EWE012',
        email: 'santhosh.kumar@elewayte.com',
        phone: '+91 7339693390',
        bloodGroup: 'O+',
        address: '#145 Nobin Cottage 10th cross Bandepalya Garvebhavipalya Bangalore - 560068',
        dob: '11/03/1998',
        joiningDate: 'Feb 15, 2022'
    },
    // Add more employees as needed
};

function displayEmployeeDetails(employeeId) {
    const employee = employees[employeeId];

    if (employee) {
        const detailsContainer = document.getElementById('employeeDetails');
        detailsContainer.innerHTML = `
            <img src="${employee.imageUrl}" alt="${employee.name}">
            <h2>${employee.name}</h2>
            <p>${employee.position}</p>
            <p>ID No: ${employee.id}</p>
            <p>Email: ${employee.email}</p>
            <p>Phone: ${employee.phone}</p>
            <p>Blood Group: ${employee.bloodGroup}</p>
            <p>Address: ${employee.address}</p>
            <p>DOB: ${employee.dob}</p>
            <p>Joining Date: ${employee.joiningDate}</p>
        `;
    } else {
        console.error('Employee not found');
    }
}

window.onload = function () {
    console.log('Page loaded');

    const urlParams = new URLSearchParams(window.location.search);
    const employeeId = urlParams.get('id');
    console.log('Employee ID from URL:', employeeId);

    if (employeeId !== null) {
        displayEmployeeDetails(employeeId);
    } else {
        console.error('Employee ID not provided');
    }
};