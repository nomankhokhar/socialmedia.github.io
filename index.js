// Side Bar 
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
var root = document.querySelector(':root');


// remove Ative class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    });
});





const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color div');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

//==================== MESSAGES

// search chat

const searchMessages = () => {

    const val = messageSearch.value.toLowerCase();

    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';
        }
    })
}


messageSearch.addEventListener('keyup', searchMessages)



// HIghlighted messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})



// =============== Theme/Display Customization

// OPEN MODEL
const openThemModel = () => {
    themeModel.style.display = 'grid';
}


// CLOSE MODEL

const closeThemModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}

themeModel.addEventListener('click', closeThemModel);

theme.addEventListener('click', openThemModel);


// =================== FONTS

fontSizes.forEach(size => {
    let fontSize;


    size.classList.toggle('active');

    size.addEventListener('click', () => {
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

        document.querySelector('html').style.fontSize = fontSize;
    })

})


// ============= Chnage primary Colors


colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let parimaryHue;
        if (color.classList.contains('color-1')) {
            parimaryHue = 252;
        }
        else if (color.classList.contains('color-2')) {
            parimaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            parimaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            parimaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            parimaryHue = 202;
        }


        root.style.setProperty('--primary-color-hue', parimaryHue);
    })
})



// ====== theme BACKGROUND VALUES

let lightCOlorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightCOlorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

bg2.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness= '20%';
    lightCOlorLightness = '15%';


    bg2.classList.add('active');


    // remove active classes

    bg1.classList.remove('active');
    bg3.classList.remove('active');

    changeBG();
})




bg3.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness= '10%';
    lightCOlorLightness = '0%';


    bg3.classList.add('active');


    // remove active classes

    bg2.classList.remove('active');
    bg1.classList.remove('active');

    changeBG();
})




bg1.addEventListener('click', ()=>{

    bg1.classList.add('active');


    // remove active classes

    bg2.classList.remove('active');
    bg3.classList.remove('active');

    window.location.reload();
})
// END