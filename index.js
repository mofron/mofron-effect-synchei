/**
 * @file mofron-effect-synchei/index.js
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
            this.prmMap('tgtComp', 'offset');
            this.name('SyncHei');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    tgtComp (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_tgtcomp) ? null : this.m_tgtcomp;
            }
            /* setter */
            if (true !== mf.func.isInclude(prm, 'Component')) {
                throw new Error('invalid parameter');
            }
            this.m_tgtcomp = prm;
            prm.styleTgt().styleListener(
                'height',
                (p1,p2,sync) => {
                    try {
                       if (true === sync.status()) {
                           sync.execute(true);
                       }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                this
            );
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    offset (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_offset) ? '0rem' : this.m_offset;
            }
            /* setter */
            this.m_offset = mf.func.getSizeObj(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (cmp) {
        try {
            if (null === this.tgtComp()) {
                this.tgtComp(this.component().parent());
            }
            cmp.height(
                mf.func.sizeSum(this.tgtComp().height(), this.offset())
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable () {}
}
module.exports = mf.effect.SyncHei;
/* end of file */
