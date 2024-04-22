// Declare the "jourTravaille" function
function jourTravaille(date) {
    // Extract day, month, and year from the date
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-based
    const year = date.getFullYear();

    // Array of public holidays in 2024
    const publicHolidays = [
        "2024-01-01", // New Year's Day
        "2024-04-01", // Easter Monday
        "2024-05-01", // Labour Day
        "2024-05-08", // Victory in Europe Day
        "2024-05-30", // Ascension Day
        "2024-06-10", // Whit Monday
        "2024-07-14", // Bastille Day
        "2024-08-15", // Assumption Day
        "2024-11-01", // All Saints' Day
        "2024-11-11", // Armistice Day
        "2024-12-25"  // Christmas Day
    ];

    // Check if the date is a public holiday
    const dateString = year + "-" + String(month).padStart(2, '0') + "-" + String(day).padStart(2, '0');
    if (publicHolidays.includes(dateString)) {
        console.log(`Le ${day} ${month} ${year} est un jour férié`);
        return;
    }

    // Check if the date is a weekend (Saturday or Sunday)
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log(`Non, ${day} ${month} ${year} est un week-end`);
        return;
    }

    // If the date is not a public holiday or a weekend, it is a working day
    console.log(`Oui, ${day} ${month} ${year} est un jour travaillé`);
}

// Test the "jourTravaille" function
const date1 = new Date("2024-05-01"); // Labour Day
const date2 = new Date("2024-05-04"); // Working day
const date3 = new Date("2024-05-10"); // Weekend (Saturday)

jourTravaille(date1);
jourTravaille(date2);
jourTravaille(date3);
