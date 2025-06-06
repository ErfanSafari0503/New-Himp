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

export function validateInstagramPostUrl(postUrl) {
    if (typeof postUrl !== 'string' || postUrl.trim() === '') {
        return false;
    }

    const instagramRegex = new RegExp(
    /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9\-_]+)\/?(?:[\?].*)?$/
  );

  return instagramRegex.test(postUrl);
}