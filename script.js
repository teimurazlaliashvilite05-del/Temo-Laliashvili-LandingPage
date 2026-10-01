document.addEventListener('DOMContentLoaded', () => {
    // Buttons interaction
    const btnGetStarted = document.getElementById('btn-get-started');
    const btnLearnMore = document.getElementById('btn-learn-more');
    const shapes = document.querySelectorAll('.shape');

    btnGetStarted.addEventListener('click', () => {
        alert('შენ დააჭირე "Get Started" ღილაკს. დავიწყოთ!');
    });

    btnLearnMore.addEventListener('click', () => {
        alert('შენ დააჭირე "Learn More" ღილაკს. მეტი ინფორმაციისთვის დაგვიკავშირდით.');
    });

    // Parallax effect on mouse move for visual block shapes
    const baseTransforms = {
        'shape-1': 'translate(-50%, -50%)',
        'shape-2': 'translate(0, 0)',
        'shape-3': 'rotate(15deg)'
    };

    document.addEventListener('mousemove', (e) => {
        // Calculate mouse position relative to center of screen
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 1.5;
            let baseTransform = '';
            
            if (shape.classList.contains('shape-1')) baseTransform = baseTransforms['shape-1'];
            else if (shape.classList.contains('shape-2')) baseTransform = baseTransforms['shape-2'];
            else if (shape.classList.contains('shape-3')) baseTransform = baseTransforms['shape-3'];

            // Apply base transform combined with parallax translation
            shape.style.transform = `${baseTransform} translate(${xAxis * speed}px, ${yAxis * speed}px)`;
        });
    });
});
