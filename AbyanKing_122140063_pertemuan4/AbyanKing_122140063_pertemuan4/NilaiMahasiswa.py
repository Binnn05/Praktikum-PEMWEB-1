# Data mahasiswa
mahasiswa = [
    {"nama": "Hadi", "nim": "123", "nilai_uts": 80, "nilai_uas": 60, "nilai_tugas": 85},
    {"nama": "Farras", "nim": "124", "nilai_uts": 45, "nilai_uas": 50, "nilai_tugas": 72},
    {"nama": "Asep", "nim": "125", "nilai_uts": 85, "nilai_uas": 75, "nilai_tugas": 85},
    {"nama": "Dodi", "nim": "126", "nilai_uts": 55, "nilai_uas": 90, "nilai_tugas": 53},
    {"nama": "Eka", "nim": "127", "nilai_uts": 60, "nilai_uas": 40, "nilai_tugas": 50},
]

# Hitung nilai akhir dan tentukan grade
for mhs in mahasiswa:
    nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
    mhs["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        grade = "A"
    elif nilai_akhir >= 70:
        grade = "B"
    elif nilai_akhir >= 60:
        grade = "C"
    elif nilai_akhir >= 50:
        grade = "D"
    else:
        grade = "E"
    
    mhs["grade"] = grade

# Tampilkan tabel data
print("\nData Mahasiswa:")
print(f"{'Nama':<10} {'NIM':<5} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade':<5}")
for mhs in mahasiswa:
    print(f"{mhs['nama']:<10} {mhs['nim']:<5} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<7} {mhs['nilai_akhir']:<7.2f} {mhs['grade']:<5}")

# Cari nilai tertinggi dan terendah
nilai_akhir_list = [mhs["nilai_akhir"] for mhs in mahasiswa]
nilai_tertinggi = max(nilai_akhir_list)
nilai_terendah = min(nilai_akhir_list)

mhs_tertinggi = [mhs for mhs in mahasiswa if mhs["nilai_akhir"] == nilai_tertinggi]
mhs_terendah = [mhs for mhs in mahasiswa if mhs["nilai_akhir"] == nilai_terendah]

# Tampilkan mahasiswa dengan nilai tertinggi dan terendah
print("\nMahasiswa dengan nilai tertinggi:")
for mhs in mhs_tertinggi:
    print(f"{mhs['nama']} - {mhs['nilai_akhir']:.2f}")

print("\nMahasiswa dengan nilai terendah:")
for mhs in mhs_terendah:
    print(f"{mhs['nama']} - {mhs['nilai_akhir']:.2f}")
