import forge from 'node-forge'
import KEYS from '@/constants/keys'

/**
 * Encrypt given data
 *
 * @param {Object} data
 * @return {String}
 */

export const encrypt = (data) => {
  const toEncrypt = typeof data === 'string' ? data : JSON.stringify(data)
  const encrypted = forge.pki
    .publicKeyFromPem(KEYS.RSA)
    .encrypt(toEncrypt, 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: {
        md: forge.md.sha1.create(),
      },
    })

  // const decode64 = forge.util.decode64(forge.util.encode64(encrypted))

  // const decrypted = forge.pki
  //   .privateKeyFromPem(KEYS.PRIVATE_RSA)
  //   .decrypt(decode64, 'RSA-OAEP', {
  //     md: forge.md.sha256.create(),
  //     mgf1: {
  //       md: forge.md.sha1.create(),
  //     },
  //   })

  // console.log(decrypted)

  return forge.util.encode64(encrypted)
}
