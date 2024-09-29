// Function to show the selected section and update the active tab
function showSection(sectionId, tabElement) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('nav a');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Set the clicked tab as active
    tabElement.classList.add('active');
}

// Sample data for charts
const years = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
const system165GroundWater = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350];
const system165CAPWater = [50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410, 430, 450, 470, 490, 510, 530, 550];
const system165ReclaimedWater = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155];

const system174GroundWater = [200, 230, 260, 290, 320, 350, 380, 410, 440, 470, 500, 530, 560, 590, 620, 650, 680, 710, 740, 770, 800, 830, 860, 890, 920, 950];
const system174CAPWater = [70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410, 430, 450, 470, 490, 510, 530, 550, 570];

// Chart 1: Annual Usage (Combined)
const ctx1 = document.getElementById('annualUsageChart').getContext('2d');
const annualUsageChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: years,
        datasets: [
            {
                label: 'System 10-165 Ground Water',
                data: system165GroundWater,
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            },
            {
                label: 'System 10-165 CAP Water',
                data: system165CAPWater,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            },
            {
                label: 'System 10-165 Reclaimed Water',
                data: system165ReclaimedWater,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            },
            {
                label: 'System 10-174 Ground Water',
                data: system174GroundWater,
                borderColor: 'rgba(153, 102, 255, 1)',
                fill: false
            },
            {
                label: 'System 10-174 CAP Water',
                data: system174CAPWater,
                borderColor: 'rgba(255, 159, 64, 1)',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Annual Water Production (AF)'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart 2: Quarterly Usage
const ctx2 = document.getElementById('quarterlyUsageChart').getContext('2d');
const quarterlyUsageChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'System 10-165 Ground Water',
                data: [300, 400, 500, 600],
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            },
            {
                label: 'System 10-174 Ground Water',
                data: [500, 450, 400, 350],
                backgroundColor: 'rgba(153, 102, 255, 0.6)'
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Quarterly Water Production'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart 3: Combined Usage
const ctx3 = document.getElementById('combinedUsageChart').getContext('2d');
const combinedUsageChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: years,
        datasets: [
            {
                label: 'System 10-165 Ground Water',
                data: system165GroundWater,
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            },
            {
                label: 'System 10-165 CAP Water',
                data: system165CAPWater,
                backgroundColor: 'rgba(255, 99, 132, 0.6)'
            },
            {
                label: 'System 10-174 Ground Water',
                data: system174GroundWater,
                backgroundColor: 'rgba(153, 102, 255, 0.6)'
            },
            {
                label: 'System 10-174 CAP Water',
                data: system174CAPWater,
                backgroundColor: 'rgba(255, 159, 64, 0.6)'
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Combined Water Usage (AF)'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart 4: System Breakdown
const ctx4 = document.getElementById('systemBreakdownChart').getContext('2d');
const systemBreakdownChart = new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['System 10-165', 'System 10-174'],
        datasets: [
            {
                label: 'Water Production by System',
                data: [60, 40],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Water Production by System (AF)'
        }
    }
});
