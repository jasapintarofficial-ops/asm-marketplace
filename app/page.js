export default function Home() {
  return (
    <main style={{fontFamily:'sans-serif', maxWidth:'800px', margin:'0 auto', padding:'20px'}}>
      <h1 style={{color:'#2563eb'}}>🔧 JasaPintar</h1>
      <p style={{fontSize:'18px'}}>Platform jasa profesional terpercaya</p>
      
      <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'20px', marginTop:'30px'}}>
        <div style={{background:'#eff6ff', padding:'20px', borderRadius:'10px'}}>
          <h2>❄️ Service AC</h2>
          <p>Teknisi berpengalaman, bergaransi 7 hari</p>
          <button style={{background:'#2563eb', color:'white', padding:'10px 20px', border:'none', borderRadius:'5px'}}>Pesan Sekarang</button>
        </div>
        <div style={{background:'#f0fdf4', padding:'20px', borderRadius:'10px'}}>
          <h2>🚽 Sedot WC</h2>
          <p>Tersedia 24 jam, armada lengkap</p>
          <button style={{background:'#16a34a', color:'white', padding:'10px 20px', border:'none', borderRadius:'5px'}}>Pesan Sekarang</button>
        </div>
        <div style={{background:'#fefce8', padding:'20px', borderRadius:'10px'}}>
          <h2>💧 Sumur Bor</h2>
          <p>Tim profesional berpengalaman</p>
          <button style={{background:'#ca8a04', color:'white', padding:'10px 20px', border:'none', borderRadius:'5px'}}>Pesan Sekarang</button>
        </div>
        <div style={{background:'#fdf4ff', padding:'20px', borderRadius:'10px'}}>
          <h2>⚡ Instalasi Listrik</h2>
          <p>Teknisi bersertifikat PLN</p>
          <button style={{background:'#9333ea', color:'white', padding:'10px 20px', border:'none', borderRadius:'5px'}}>Pesan Sekarang</button>
        </div>
      </div>
    </main>
  )
}
