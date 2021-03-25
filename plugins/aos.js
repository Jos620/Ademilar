/**
 * Animações ao rodar a tela
 */

import AOS from "aos";

export default ({ app }, inject) => {
    app.AOS = new AOS.init({
        duration: 1400
    });
};
