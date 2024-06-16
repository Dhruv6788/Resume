document.addEventListener('DOMContentLoaded', () => {
    // Function to simulate file download
    function downloadResume() {
        const link = document.createElement('a');
        link.href = './Resume.pdf'; // Update this with the actual path to your resume
        link.download = 'MBIT_IT_JoshiDhruvkumarAnilbhai.pdf';
        link.click();

        // Display success message
        const message = document.getElementById('message');
        message.textContent = 'Resume Downloaded Successfully';
        message.classList.add('success');
    }
    downloadResume();
});
