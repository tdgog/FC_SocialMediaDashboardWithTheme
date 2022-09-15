let lightTheme = true;

const ToggleTheme = () => {
    lightTheme = !lightTheme;
    
    let docstyle = document.documentElement.style;
    if (lightTheme) {
        docstyle.setProperty('--toggle', 'hsl(230, 22%, 74%)');
        docstyle.setProperty('--background', 'hsl(0, 0%, 100%)');
        docstyle.setProperty('--top-background', 'hsl(225, 100%, 98%)');
        docstyle.setProperty('--card-background', 'hsl(227, 47%, 96%)');
        docstyle.setProperty('--text-major', 'hsl(230, 17%, 14%)');
        docstyle.setProperty('--text-minor', 'hsl(228, 12%, 44%)');
    } else {
        docstyle.setProperty('--toggle', 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
        docstyle.setProperty('--background', 'hsl(230, 17%, 14%)');
        docstyle.setProperty('--top-background', 'hsl(232, 19%, 15%)');
        docstyle.setProperty('--card-background', 'hsl(228, 28%, 20%)');
        docstyle.setProperty('--text-major', 'hsl(0, 0%, 100%)');
        docstyle.setProperty('--text-minor', 'hsl(228, 34%, 66%)');
    }
}
