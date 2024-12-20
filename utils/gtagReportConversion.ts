export const gtagReportConversion = (url?: string) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    const callback = () => {
      if (url) {
        window.location.href = url;
      }
    };

    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-16773984613/DwVPCLeeoegZEOXiur4-',
      value: 1.0,
      currency: 'VND',
      transaction_id: '',
      event_callback: callback,
    });

    return false;
  }
};