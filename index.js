/**
 * @file mofron-effect-synchei/index.js
 * @brief synchronize height of target component and height of effect component
 *        this effect resizes height of a target component when the height of the target component changed.
 * @license MIT
 */
const comutl = mofron.util.common;

module.exports = class extends mofron.class.Effect {
    /**
     * constructor
     * 
     * @param (mixed) string: targetComp parameter
     *                key-value: effect config
     * @param (string) offset parameter
     * @short targetComp,offset
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
	    this.modname('SyncHei');
            this.shortForm('targetComp', 'offset');
            
            /* init config */
	    this.confmng().add('targetComp', { type: 'Component' });
	    this.confmng().add('offset',     { type: 'size' });
	    
            /* set config */
	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter for height listen target component
     * it triggers this effect when height of target component was changed.
     *
     * @param (mofron.class.Component) target component
     *                                 undefined: call as getter
     * @return (mixed) mofron.class.Component: target component
     *                 null: not set
     * @type parameter
     */
    targetComp (prm) {
        try {
            let ret = this.confmng('targetComp', prm);
            if (undefined !== prm) {
                let syn_fnc = (p1,p2,sync) => {
                    try {
		        sync.execute();
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
                prm.styleDom().style().listener('height', syn_fnc, this);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * offset value setter/getter
     * this value is used for height adjustment
     *
     * @param (string(size)) offset value (default is '0rem')
     *                       undefined: call as getter
     * @return (string) offset value
     * @type parameter
     */
    offset (prm) {
        try {
	    return this.confmng('offset', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * synchronize height size
     *
     * @type private
     */
    contents (cmp) {
        try {
            if (null === this.targetComp()) {
                this.targetComp(this.component().parent());
            }
            cmp.height(
                comutl.sizesum(this.targetComp().height(), this.offset())
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
