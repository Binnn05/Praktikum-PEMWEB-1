from abc import ABC, abstractmethod

# Kelas abstrak 
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id      
        self._title = title          
        self._available = True       

    @abstractmethod
    def display_info(self):
        # Method abstrak untuk menampilkan info item
        pass

    # Method setter dan getter untuk status ketersediaan item
    @property
    def available(self):
        return self._available

    @available.setter
    def available(self, status):
        self._available = status

    def get_id(self): # Mengambil ID item
        return self._item_id

    def get_title(self): # Mengambil judul item
        return self._title

# Subclass untuk Buku, turunan dari LibraryItem
class Book(LibraryItem):
    def __init__(self, item_id, title, author): # Penulis buku
        super().__init__(item_id, title)
        self.__author = author  

    def display_info(self): # Menampilkan info buku
        status = "Tersedia" if self._available else "Sedang Dipinjam"
        print(f"[Buku] ID: {self._item_id}, Judul: '{self._title}', Penulis: {self.__author}, Status: {status}")

# Subclass untuk Majalah, turunan dari LibraryItem
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number): # Edisi majalah
        super().__init__(item_id, title)
        self.__issue_number = issue_number  

    def display_info(self): # Menampilkan info majalah
        status = "Tersedia" if self._available else "Sedang Dipinjam"
        print(f"[Majalah] ID: {self._item_id}, Judul: '{self._title}', Edisi: {self.__issue_number}, Status: {status}")

# Class utama untuk mengatur koleksi perpustakaan
class Library:
    def __init__(self):
        self.__items = []  # List untuk menyimpan item perpustakaan

    def add_item(self, item): # Fungsi untuk menambahkan item ke perpustakaan
        if isinstance(item, LibraryItem):
            self.__items.append(item)
            print(f"Item '{item.get_title()}' berhasil ditambahkan ke perpustakaan.")
        else:
            print("Hanya objek LibraryItem yang dapat ditambahkan.")

    def show_all_items(self): # Fungsi untuk menampilkan semua item dalam perpustakaan
        print("\nDaftar Koleksi Perpustakaan:")
        if not self.__items:
            print("Tidak ada item dalam perpustakaan.")
        for item in self.__items:
            item.display_info()

    def search_item(self, keyword): # Fungsi untuk mencari item berdasarkan ID atau judul
        print(f"\nHasil pencarian untuk '{keyword}':")
        found = False
        for item in self.__items:
            if keyword.lower() in item.get_title().lower() or keyword.lower() == item.get_id().lower():
                item.display_info()
                found = True
        if not found:
            print("Tidak ditemukan item yang sesuai.")

    def remove_item_by_id(self, item_id):  # Fungsi untuk menghapus item berdasarkan ID
        for item in self.__items:
            if item.get_id().lower() == item_id.lower():
                self.__items.remove(item)
                print(f"Item dengan ID '{item_id}' berhasil dihapus dari perpustakaan.")
                return
        print(f"Item dengan ID '{item_id}' tidak ditemukan.")

# Menu utama untuk interaksi pengguna
def run_library_menu():
    library = Library()

    while True:
        # Tampilan menu perpustakaan
        print("\n===== MENU PERPUSTAKAAN =====")
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Tampilkan Semua Item")
        print("4. Cari Item")
        print("5. Hapus Item Berdasarkan ID")
        print("6. Keluar")

        choice = input("Pilih opsi (1-6): ")

        if choice == '1':
            # Menginput data buku
            item_id = input("Masukkan ID Buku: ")
            title = input("Masukkan Judul Buku: ")
            author = input("Masukkan Nama Penulis: ")
            library.add_item(Book(item_id, title, author))

        elif choice == '2':
            # Menginput data majalah
            item_id = input("Masukkan ID Majalah: ")
            title = input("Masukkan Judul Majalah: ")
            issue = input("Masukkan Edisi Majalah: ")
            library.add_item(Magazine(item_id, title, issue))

        elif choice == '3':
            # Menampilkan semua item
            library.show_all_items()

        elif choice == '4':
            # Mencari item berdasarkan ID atau judul
            keyword = input("Masukkan Judul atau ID untuk mencari: ")
            library.search_item(keyword)

        elif choice == '5':
            # Hapus item berdasarkan ID
            item_id = input("Masukkan ID item yang ingin dihapus: ")
            library.remove_item_by_id(item_id)

        elif choice == '6':
            # Keluar dari program
            print("Terima kasih telah menggunakan sistem perpustakaan.")
            break

        else:
            print("Pilihan tidak valid. Silakan coba lagi.")

# Jalankan program utama
if __name__ == "__main__":
    run_library_menu()
