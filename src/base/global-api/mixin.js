/**
 * @Author: Caven
 * @Date: 2020-05-09 23:00:54
 */

const ignores = [
  'init',
  'ready',
  'use',
  'mixin',
  'Namespace',
  'Initialized',
  'Version',
  'Author',
  'GitHub',
  'Home'
]

/**
 * Mix other plug-in attributes to DC
 * @param DC
 * @returns this
 */
export function initMixin(DC) {
  DC.mixin = function(mixin) {
    for (let key in mixin) {
      !ignores.includes(key) && (DC[key] = mixin[key])
    }
    return this
  }
}
