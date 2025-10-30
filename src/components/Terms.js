import React from "react";
import "./Register.css"; // reuse same design + Font style 

export default function TermsAndConditions() {
  return (
    <div>
      <a className="brand-pill" href="/">
        <span className="gear">⚙</span>
        <span className="brand-text">GearUP</span>
      </a>

      <main className="wrap">
        <div className="header-pill">Terms & Conditions</div>

        <div
          style={{
            width: "min(720px, 94vw)",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 6px 24px rgba(0,0,0,.06)",
            padding: "30px 25px",
            textAlign: "left",
            lineHeight: "1.7",
            fontSize: "15px",
            color: "#333",
            overflowY: "auto",
            maxHeight: "75vh",
          }}
        >
          <p>
            Welcome to <strong>GearUP Vehicle Rental</strong>. By booking, renting, or
            using any of our services, you agree to the following terms and conditions.
            Please read them carefully before proceeding.
          </p>

          <h3 style={{ marginTop: "1.2rem", color: "#2f6df6" }}>1. Eligibility</h3>
          <p>
            Renters must be at least <strong>21 years old</strong> and hold a valid
            driver’s license with at least one year of driving experience. Additional
            identification may be required at the time of booking or pickup.
          </p>

          <h3 style={{ marginTop: "1.2rem", color: "#2f6df6" }}>2. Booking & Payments</h3>
          <ul style={{ marginLeft: "20px" }}>
            <li>All bookings are subject to availability.</li>
            <li>Full or partial payment may be required at the time of booking.</li>
            <li>Accepted payment methods include credit/debit cards and digital wallets.</li>
            <li>All prices are in NZD and inclusive of GST unless stated otherwise.</li>
          </ul>

          <h3 style={{ marginTop: "1.2rem", color: "#2f6df6" }}>3. Vehicle Use</h3>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Vehicles must only be driven by the registered renter or approved additional
              drivers listed in the rental agreement.
            </li>
            <li>
              The vehicle must not be used for racing, towing, off-road driving, or any
              illegal purpose.
            </li>
            <li>
              The renter is responsible for any fines, traffic violations, or damage caused
              during the rental period.
            </li>
          </ul>

          <h3 style={{ marginTop: "1.2rem", color: "#2f6df6" }}>4. Fuel Policy</h3>
          <p>
            Vehicles are provided with a full tank of fuel and must be returned full.
            A refueling fee will apply if the vehicle is returned with less fuel.
          </p>

          <h3 style={{ marginTop: "1.2rem", color: "#2f6df6" }}>5. Damage & Insurance</h3>
          <p>
            Basic insurance is included, but the renter is liable for the insurance
            excess in case of damage or accident. Optional excess reduction coverage
            may be purchased at the time of booking.
          </p>

          <h3 style={{ marginTop: "1.2rem", color: "#2f6df6" }}>6. Cancellation & Refunds</h3>
          <ul style={{ marginLeft: "20px" }}>
            <li>Cancellations made 48 hours before pickup are eligible for a full refund.</li>
            <li>
              Cancellations within 48 hours may incur a 50% charge of the booking fee.
            </li>
            <li>No refunds for no-shows or early returns.</li>
          </ul>

          <h3 style={{ marginTop: "1.2rem", color: "#2f6df6" }}>7. Liability</h3>
          <p>
            GearUP is not liable for any loss, damage, or delay caused by circumstances
            beyond our control, including but not limited to weather, traffic, or
            mechanical failures.
          </p>

          <h3 style={{ marginTop: "1.2rem", color: "#2f6df6" }}>8. Privacy Policy</h3>
          <p>
            Personal information provided during booking is used solely for verification,
            contact, and rental purposes. GearUP does not share your information with
            third parties except where legally required.
          </p>

          <h3 style={{ marginTop: "1.2rem", color: "#2f6df6" }}>9. Governing Law</h3>
          <p>
            These terms and conditions are governed by the laws of New Zealand. Any
            disputes shall be resolved in accordance with New Zealand’s legal system.
          </p>

          <p style={{ marginTop: "1.5rem" }}>
            By continuing with your booking, you confirm that you have read, understood,
            and agreed to these terms.
          </p>
        </div>

        <p className="login-link" style={{ marginTop: "1.5rem" }}>
          <a href="/">Back to Home</a>
        </p>
      </main>
    </div>
  );
}
