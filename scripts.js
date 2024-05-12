// JavaScript to handle the download
document.getElementById('downloadLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Replace 'resume.pdf' with the actual filename of your PDF file
    var resumeFileName = 'Resume_2023.pdf';

    // Construct the full path to your PDF file
    var resumePath = window.location.href + resumeFileName;

    // Create a temporary link element
    var link = document.createElement('a');
    link.href = resumePath;
    link.download = resumeFileName;

    // Trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
});
