console.log("HRMS Custom Food Request Override Loaded");

document.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(() => {
        // Wait for HRMS quickLinks to be available
        if (!window.quickLinks) return;

        console.log("Overriding Quick Links...");

        // Replace Quick Links with custom list
        window.quickLinks = [
            {
                title: "Request Attendance",
                route: "AttendanceRequestFormView",
            },
            {
                title: "Request a Shift",
                route: "ShiftRequestFormView",
            },
            {
                title: "Request Leave",
                route: "LeaveApplicationFormView",
            },
            {
                title: "Claim an Expense",
                route: "ExpenseClaimFormView",
            },
            {
                title: "Request Food",
                route: "/app/food-request/new" 
                // 👆 This opens your new Food Request Doctype Form
            }
        ];

        clearInterval(timer); // Stop loop after override
    }, 500);
});
