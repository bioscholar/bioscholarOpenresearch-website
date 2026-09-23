import Link from 'next/link';

export default function page() {
  return (
    <div className='submit-research-card submit-research-done'>
      <div className='submit-research-check'>✓</div>
      <h1>Thank you!</h1>
      <p>We have received your details. Our editorial team will get back to you soon.</p>
      <Link href="/" className='submit-research-btn submit-research-btn-primary'>Back to home</Link>
    </div>
  );
}
