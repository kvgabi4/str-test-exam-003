function changeElements() {
    // 
    const elements = document.querySelectorAll('.example');
    elements.forEach(item => {
        item.style.backgroundColor = 'red';
        item.style.fontStyle = 'italic';
    });

    // const examples = document.querySelectorAll('.example');
    // for (let i = 0; i < examples.length; i++) {
    //     examples[i].style.backgroundColor = 'red';
    //     examples[i].style.fontStyle = 'italic';
    // }
}


export { changeElements };