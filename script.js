function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

function toggleAccordion(id) {
    var accordion = document.getElementById(id);
    var content = accordion.getElementsByClassName('accordion-content')[0];
    if (accordion.classList.contains('active')) {
        accordion.classList.remove('active');
        content.style.maxHeight = '0';
        setTimeout(() => content.style.padding = '0 15px', 500); // Warten, bis die max-height Animation abgeschlossen ist
    } else {
        // Schließen aller anderen aktiven Akkordeons
        document.querySelectorAll('.accordion-item.active').forEach(function(item) {
            item.classList.remove('active');
            item.getElementsByClassName('accordion-content')[0].style.maxHeight = '0';
            setTimeout(() => item.getElementsByClassName('accordion-content')[0].style.padding = '0 15px', 500);
        });

        accordion.classList.add('active');
        content.style.padding = '15px'; // Sofort padding setzen für Öffnen
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

