// Mock Database of Jobs
const jobsData = [
    {
        tag: "URGENT REQUIREMENT",
        company: "Surat Textiles Pvt Ltd",
        title: "Sr. Accountant",
        experience: "3-5 Years",
        salary: "₹20,000 - ₹25,000/month",
        location: "Ring Road, Surat",
        phone: "9876543210"
    },
    {
        tag: "WE ARE HIRING",
        company: "Apex Manufacturing",
        title: "Dispatch Supervisor",
        experience: "1-2 Years",
        salary: "₹15,000/month",
        location: "GIDC, Pandesara",
        phone: "8765432109"
    },
    {
        tag: "જોઈએ છે",
        company: "Shreeji Enterprises",
        title: "Tally Operator",
        experience: "Fresher / 1 Year",
        salary: "Based on Interview",
        location: "Varachha",
        phone: "7654321098"
    },
    {
        tag: "STAFF REQUIRED",
        company: "Krishna Packaging",
        title: "Helpers & Packers (10 Posts)",
        experience: "Fresher allowed",
        salary: "₹10,000 - ₹12,000/month",
        location: "Sachin GIDC",
        phone: "6543210987"
    }
];

// Function to render jobs to the UI
function renderJobs() {
    const jobBoard = document.getElementById('job-board');
    jobBoard.innerHTML = ''; // Clear existing content

    jobsData.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        
        card.innerHTML = `
            <div class="header-tag">${job.tag}</div>
            <div class="company-name">${job.company}</div>
            <div class="job-title">${job.title}</div>
            <div class="job-details">
                <p><strong>Exp:</strong> ${job.experience}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <p><strong>Location:</strong> ${job.location}</p>
            </div>
            <a href="tel:${job.phone}" class="call-btn">📞 Call: ${job.phone}</a>
        `;
        jobBoard.appendChild(card);
    });
}

// Initialize the page when the DOM loads
document.addEventListener('DOMContentLoaded', renderJobs);