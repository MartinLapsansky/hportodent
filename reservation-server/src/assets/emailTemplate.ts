export function getReservationConfirmationHtml(
    firstName: string,
    lastName: string,
    date: Date,
    time: string,
    service: string,
    note: string,
): string {
    return `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 600px; margin: auto;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://i.ibb.co/Mx0CjJLL/ortodentlogo.png" alt="HPortodent Logo" style="max-width: 150px;" />
      </div>
      
      <h2 style="color: #007bff;">Potvrdenie rezervácie</h2>
      <p>Dobrý deň, <strong>${firstName} ${lastName}</strong>,</p>
      <p>Ďakujeme za Vašu rezerváciu. Nižšie nájdete podrobnosti:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;"><strong>Dátum</strong></td>
          <td style="padding: 8px; border: 1px solid #ccc;">${date}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;"><strong>Čas</strong></td>
          <td style="padding: 8px; border: 1px solid #ccc;">${time}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;"><strong>Služba</strong></td>
          <td style="padding: 8px; border: 1px solid #ccc;">${service}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;"><strong>Poznámka</strong></td>
          <td style="padding: 8px; border: 1px solid #ccc;">${note}</td>
        </tr>
      </table>

      <p>Ak potrebujete zmeniť termín, kontaktujte nás:</p>
      <ul>
        <li>📞 Telefón: <a href="tel:0534541345">+421 900 000 000</a></li>
        <li>📧 E-mail: <a href="mailto:hportodent@azet.sk">info@hportodent.sk</a></li>
      </ul>

      <p>S pozdravom,<br/><strong>HPortodent tím</strong></p>

      <hr style="margin-top: 30px;" />
      <p style="font-size: 12px; color: #666; text-align: center;">
        Tento e-mail bol vygenerovaný automaticky. Prosím, neodpovedajte naň.
      </p>
    </div>
  `;
}