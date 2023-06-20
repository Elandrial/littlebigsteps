function handleKeyDown(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        const tagInput = document.getElementById('tag-input');
        const value = tagInput.value.trim();
        if (value !== '') {
            createTag(value);
            tagInput.value = '';
        }
    }
}

function createTag(value) {
    const tagContainer = document.querySelector('.interest-tags');
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = value;
    const closeButton = document.createElement('span');
    closeButton.classList.add('tag-close');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', function () {
        tag.remove();
    });
    tag.appendChild(closeButton);
    tagContainer.insertBefore(tag, tagContainer.firstChild);
}

function generateEvent() {
    const tagInput = document.getElementById('tag-input');
    const value = tagInput.value.trim();
    if (value !== '') {
        createTag(value);
        tagInput.value = '';
    }

    const tags = document.querySelectorAll('.tag');
    const words = Array.from(tags).map(tag => tag.textContent.replace('x', ''));

    const swimmingElement = document.getElementById('swimming-event');
    swimmingElement.classList.add('d-none');

    const runningElement = document.getElementById('running-event');
    runningElement.classList.add('d-none');

    const foodElement = document.getElementById('food-event');
    foodElement.classList.add('d-none');

    const otherElement = document.getElementById('other-event');
    otherElement.classList.add('d-none');

    if (words.includes('swimming')) {
        swimmingElement.classList.remove('d-none');
    }
    if (words.includes('running')) {
        runningElement.classList.remove('d-none');
    }
    if (words.includes('cooking')) {
        foodElement.classList.remove('d-none');
    }
    otherElement.classList.remove('d-none');
}