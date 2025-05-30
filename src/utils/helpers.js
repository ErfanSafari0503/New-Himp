export function handleLogoClick() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })

}

export function currentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

