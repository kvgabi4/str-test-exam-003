function changeElements() {
    // 
    const elements = document.querySelectorAll('.example');
    console.log(elements)
    elements.forEach(item => {
        item.style.backgroundColor = 'red';
        item.style.fontStyle = 'italic';
    });
}


export { changeElements };