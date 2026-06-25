import Script from "next/script";

/**
 * Tag global do Google Ads (gtag.js).
 *
 * Conversion ID da conta Multa Zero (320-387-4931):
 *   AW-18165295762
 *
 * Conversion Label da ação "Clique WhatsApp":
 *   XzglCK7c8MAcEJLV8dVD
 *
 * O disparo da conversão é feito a partir do clique no botão de WhatsApp
 * (ver `app/components/whatsapp-button.tsx`).
 */

export const GOOGLE_ADS_CONVERSION_ID = "AW-18165295762";
export const GOOGLE_ADS_WHATSAPP_LABEL = "XzglCK7c8MAcEJLV8dVD";

export function GoogleAdsTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_CONVERSION_ID}');
        `}
      </Script>
      <Script id="google-ads-wa-delegate" strategy="afterInteractive">
        {`
          // Delegação global: dispara a conversão "Clique WhatsApp" para
          // QUALQUER link <a href="wa.me/..."> da página, mesmo os que não
          // passam pelo componente <WhatsAppButton/> (header, footer, etc.).
          (function(){
            if (window.__waConvBound) return;
            window.__waConvBound = true;
            document.addEventListener('click', function(ev){
              var el = ev.target;
              while (el && el !== document.body) {
                if (el.tagName === 'A' && el.href && /wa\\.me\\//.test(el.href)) {
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'conversion', {
                      send_to: '${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_WHATSAPP_LABEL}',
                      value: 1.0,
                      currency: 'BRL'
                    });
                  }
                  return;
                }
                el = el.parentElement;
              }
            }, { capture: true });
          })();
        `}
      </Script>
    </>
  );
}
