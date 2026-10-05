const inputs = document.querySelectorAll('.control input');


function handle(){
    const suffix = this.dataset.sizing || '';
    console.log(this.value);
    
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
    // document.documentElement.style.setProperty() is used in JavaScript to dynamically set or change a CSS style property on the root <html></inline> element of a webpage

}

inputs.forEach((input) => input.addEventListener('change', handle));
inputs.forEach((input) => input.addEventListener('mousemove', handle));