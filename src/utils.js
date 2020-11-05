import noPreview from "./assets/No_image_available.svg"

/**
 * Give the right resource for an image
 * @param path - name of image file
 * @returns {string|*} URL of the image location or default Image
 */
export function createImageURL(path) {
    if (path != null)
        return process.env.REACT_APP_API_IMAGE_BASEURL + "original/" + path
    return noPreview
}

/**
 * Cut the text to the desired length and add ... at the end
 * @param text - text to possibly cut
 * @param length - length before cutting
 * @returns {string|*} - the text cut to the right length
 */
function truncateText(text, length) {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
}
