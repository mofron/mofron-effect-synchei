/**
 * @file mofron-effect-synchei/index.js
 * @brief synchronize height of target component and height of effect component
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class SyncHei
 * @brief radius style effect class
 */
mf.effect.SyncHei = class extends mf.Effect {
    
    constructor (po, p2) {
        try {
            super();
            this.prmMap(['targetComp', 'offset']);
            this.name('SyncHei');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for height listen target component
     * it triggers this effect when height of target component was changed.
     *
     * @param prm (Component) target component
     * @param prm (undefined) call as getter
     * @return (Component) target component
     * @return (null) not set yet
     */
    targetComp (prm) {
        try {
            let ret = this.member('targetComp', 'Component', prm);
            if (undefined !== prm) {
                let syn_fnc = (p1,p2,sync) => {
                    try { sync.execute(); } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
                prm.styleTgt().styleListener('height', syn_fnc, this);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter offset value
     * this value is used for height adjustment
     *
     * @param prm (string) css style size value (default is '0rem')
     * @param prm (undefined) call as getter
     * @return (string) offset value
     */
    offset (prm) {
        try { return this.member('offset', 'string', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * synchronize height size
     *
     * @note private method
     */
    contents (cmp) {
        try {
            if (null === this.targetComp()) {
                this.targetComp(this.component().parent());
            }
            cmp.height(
                mf.func.sizeSum(this.targetComp().height(), this.offset())
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.SyncHei;
/* end of file */
