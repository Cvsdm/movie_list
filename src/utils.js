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
