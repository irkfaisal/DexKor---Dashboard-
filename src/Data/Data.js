export const sidebar = [
    { id: "my-task", label: "My Task", icon: "🔔" },
    { id: "my-inbox", label: "My Inbox", icon: "🔔" },
    { id: "insight360", label: "Insight360", icon: "🔔" },
    { id: "dashboard", label: "Dashboard", icon: "🔔" },
    { id: "payment", label: "Payment", icon: "🔔" },
    { id: "contract", label: "Contract", icon: "🔔" },
    { id: "opportunity", label: "Opportunity", icon: "🔔" },
    { id: "customers", label: "Customers", icon: "🔔" },
    { id: "health", label: "Health", icon: "🔔" },
    { id: "nps", label: "NPS", icon: "🔔" },
    { id: "tickets", label: "Tickets", icon: "🔔" },
];


export const demoCounts = [
    { id: "pending", label: "Pending Tasks", value: 60, tone: "info" },
    { id: "overdue", label: "Overdue Tasks", value: 56, tone: "danger" },
    { id: "today", label: "Due For Today", value: 0, tone: "warning" },
    {
        id: "breach",
        label: "Approaching Breach Tasks",
        value: 1,
        tone: "success",
    },
];

export const demoTasks = [
    // A tiny sample; you can replace with data from your API
    {
        id: "TS-0465",
        customerName: "AVF",
        customerCode: "VBN-1234",
        title: "Test task",
        status: "Canceled",
        priority: "Medium",
        type: "Health Impact",
        description: "This is a test task by tanja rasheed",
    },
    {
        id: "TS-6483",
        customerName: "AVF",
        customerCode: "VBN-1234",
        title: "Test ticket for account care",
        status: "Completed",
        priority: "Low",
        type: "Health Impact",
        description: "This is a test ticket",
    },
    {
        id: "TS-6476",
        customerName: "AVF",
        customerCode: "VBN-1234",
        title: "ShashankTesting",
        status: "Pending",
        priority: "Medium",
        type: "Health Impact",
        description: "enabled",
    },
];