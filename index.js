/**
 * @file mofron-effect-synchei/index.js
 * @brief it synchronizes the height of the target component and height of effect component.
 *        this effect resizes height when the height of the target component changed.
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
            /* init config */
	    this.confmng().add('targetComp', { type: 'Component' });
	    this.confmng().add('offset', { type: 'size' });
            this.name('SyncHei');
            this.shortForm('targetComp', 'offset');
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
     * @param (Component) target component
     * @return (mixed) Component: target component
     *                 null: not set yet
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
     * setter/getter offset value
     * this value is used for height adjustment
     *
     * @param (string (size)) css style size value
     * @return (mixed) string: offset value
     *                 null: not set
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
