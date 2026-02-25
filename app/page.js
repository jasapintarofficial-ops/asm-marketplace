'use client'
import { useState } from 'react'

export default function Home() {
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({nama:'', hp:'', alamat:'', keluhan:''})
  const [terkirim, setTerkirim] = useState(false)

  const layanan = [
    {id:'service_ac', icon:'❄️', judul:'Service AC', desc:'Teknisi berpengalaman, bergaransi 7 hari', warna:'#2563eb', bg:'#eff6ff'},
    {id:'sedot_wc', icon:'🚽', judul:'Sedot WC', desc:'Tersedia 24 jam, armada lengkap', warna:'#16a34a', bg:'#f0fdf4'},
    {id:'sumur_bor', icon:'💧', judul:'Sumur Bor', desc:'Tim profesional berpengalaman', warna:'#ca8a04', bg:'#fefce8'},
    {id:'instalasi_listrik', icon:'⚡', judul:'Instalasi Listrik', desc:'Teknisi bersertifikat PLN', warna:'#9333ea', bg:'#fdf4ff'},
  ]

  function kirimPesanan() {
    if(!form.nama || !form.hp || !form.alamat) {
      alert('Mohon lengkapi semua data!')
      return
    }
    setTerkirim(true)
  }

  return (
    <main style={{fontFamily:'sans-serif', maxWidth:'800px', margin:'0 auto', padding:'20px'}}>
      <h1 style={{color:'#2563eb'}}>🔧 JasaPintar</h1>
      <p style={{fontSize:'18px', color:'#555'}}>Platform jasa profesional terpercaya — Bergaransi & Terpercaya</p>

      <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'20px', marginTop:'30px'}}>
        {layanan.map(l => (
          <div key={l.id} style={{background:l.bg, padding:'20px', borderRadius:'10px', boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>
            <h2 style={{margin:'0 0 8px'}}>{l.icon} {l.judul}</h2>
            <p style={{color:'#666', margin:'0 0 16px'}}>{l.desc}</p>
            <button
              onClick={() => { setModal(l); setTerkirim(false); setForm({nama:'',hp:'',alamat:'',keluhan:''}) }}
              style={{background:l.warna, color:'white', padding:'10px 20px', border:'none', borderRadius:'5px', cursor:'pointer', fontWeight:'bold'}}>
              Pesan Sekarang
            </button>
          </div>
        ))}
      </div>

      {modal && (
        <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, background:'rgba(0,0,0,0.5)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:999}}>
          <div style={{background:'white', padding:'30px', borderRadius:'12px', width:'90%', maxWidth:'400px'}}>
            {!terkirim ? (
              <>
                <h2 style={{margin:'0 0 20px'}}>{modal.icon} Pesan {modal.judul}</h2>
                <input placeholder="Nama lengkap *" value={form.nama} onChange={e=>setForm({...form,nama:e.target.value})}
                  style={{width:'100%', padding:'10px', marginBottom:'10px', border:'1px solid #ddd', borderRadius:'5px', boxSizing:'border-box'}}/>
                <input placeholder="Nomor HP/WhatsApp *" value={form.hp} onChange={e=>setForm({...form,hp:e.target.value})}
                  style={{width:'100%', padding:'10px', marginBottom:'10px', border:'1px solid #ddd', borderRadius:'5px', boxSizing:'border-box'}}/>
                <input placeholder="Alamat lengkap *" value={form.alamat} onChange={e=>setForm({...form,alamat:e.target.value})}
                  style={{width:'100%', padding:'10px', marginBottom:'10px', border:'1px solid #ddd', borderRadius:'5px', boxSizing:'border-box'}}/>
                <textarea placeholder="Keluhan / keterangan tambahan" value={form.keluhan} onChange={e=>setForm({...form,keluhan:e.target.value})}
                  style={{width:'100%', padding:'10px', marginBottom:'16px', border:'1px solid #ddd', borderRadius:'5px', boxSizing:'border-box', height:'80px'}}/>
                <div style={{display:'flex', gap:'10px'}}>
                  <button onClick={()=>setModal(null)}
                    style={{flex:1, padding:'10px', border:'1px solid #ddd', borderRadius:'5px', cursor:'pointer', background:'white'}}>
                    Batal
                  </button>
                  <button onClick={kirimPesanan}
                    style={{flex:2, padding:'10px', background:modal.warna, color:'white', border:'none', borderRadius:'5px', cursor:'pointer', fontWeight:'bold'}}>
                    Kirim Pesanan
                  </button>
                </div>
              </>
            ) : (
              <div style={{textAlign:'center', padding:'20px'}}>
                <div style={{fontSize:'60px'}}>✅</div>
                <h2 style={{color:'#16a34a'}}>Pesanan Diterima!</h2>
                <p>Halo <strong>{form.nama}</strong>! Pesanan <strong>{modal.judul}</strong> Anda sudah kami terima.</p>
                <p style={{color:'#666'}}>Tim kami akan menghubungi <strong>{form.hp}</strong> dalam 15 menit.</p>
                <button onClick={()=>setModal(null)}
                  style={{marginTop:'16px', padding:'10px 30px', background:'#2563eb', color:'white', border:'none', borderRadius:'5px', cursor:'pointer', fontWeight:'bold'}}>
                  Tutup
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
