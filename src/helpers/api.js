/**
 * Extract file name from header content-disposition
 *
 * @param {Object} headers
 * @return {String}
 */
export const extractFileNameFromHeader = (headers) => {
  const contentDisposition = headers && headers['content-disposition']
  //convert to get file name
  if (contentDisposition && contentDisposition.indexOf('attachment') !== -1) {
    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
    const matches = filenameRegex.exec(contentDisposition)
    if (matches != null && matches[1]) {
      return matches[1].replace(/['"]/g, '')
    }
  }

  return 'downloaded-file'
}
