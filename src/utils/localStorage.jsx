localStorage.clear()

const employees = [
    {
        id: 1,
        firstName: "Aarav",
        email: "e@e.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Submit Report",
                taskDescription: "Submit the quarterly sales report.",
                taskDate: "2024-12-28",
                category: "Reporting"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Team Meeting",
                taskDescription: "Attend the weekly team meeting.",
                taskDate: "2024-12-27",
                category: "Meeting"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Client Follow-up",
                taskDescription: "Follow up with the client on project updates.",
                taskDate: "2024-12-25",
                category: "Client Work"
            }
        ],
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 2,
        firstName: "Vivaan",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Code Review",
                taskDescription: "Review code submissions from junior developers.",
                taskDate: "2024-12-28",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "System Update",
                taskDescription: "Update the internal tracking system.",
                taskDate: "2024-12-26",
                category: "System Maintenance"
            }
        ],
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 3,
        firstName: "Ananya",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Write Documentation",
                taskDescription: "Complete the API documentation.",
                taskDate: "2024-12-29",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Client Presentation",
                taskDescription: "Prepare and deliver the client presentation.",
                taskDate: "2024-12-26",
                category: "Presentation"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Bug Fixing",
                taskDescription: "Resolve critical bugs in the system.",
                taskDate: "2024-12-24",
                category: "Debugging"
            }
        ],
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 4,
        firstName: "Diya",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Inventory Check",
                taskDescription: "Conduct inventory checks in the warehouse.",
                taskDate: "2024-12-30",
                category: "Logistics"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Training Session",
                taskDescription: "Host a training session for new hires.",
                taskDate: "2024-12-26",
                category: "Training"
            }
        ],
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    }
];


const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees,admin};    
}