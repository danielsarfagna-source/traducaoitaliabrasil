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
    </>
  );
}
