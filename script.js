const actions = Array.from(document.querySelectorAll('[data-action]'));

let counter = localStorage.getItem("counter") || 0;

document.querySelector(".counter-value").innerText = counter;

if (counter > 0) {
    document.querySelector(".counter-value").style.color = "#ff0000";
}

actions.forEach(action => {
    action.addEventListener('click', () => {
        const action_name = action.dataset.action;

        switch (action_name) {
            case 'increase':
                counter++;
                localStorage.setItem("counter", counter);
                break;
            case 'decrease':
                if (counter > 0) {
                    counter--;
                    localStorage.setItem("counter", counter);
                } else {
                    counter = 0;
                }
                break;
            case 'reset':
                counter = 0;
                break;
            case 'save':
                localStorage.setItem("counter", counter);
                break;
            case 'clear':
                localStorage.removeItem("counter");
                counter = 0;
                break;
        }

        document.querySelector(".counter-value").innerText = counter;

        if (counter > 0) {
            document.querySelector(".counter-value").style.color = "#ff0000";
        } else {
            document.querySelector(".counter-value").style.color = "#ffffff";
        }
    });
});