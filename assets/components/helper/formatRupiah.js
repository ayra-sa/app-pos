const FormatRupiah = (amount) => {
    // Membuat instance NumberFormat dengan lokal ID dan format angka
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'decimal',
        minimumFractionDigits: 0, // Anda dapat menyesuaikan ini jika ingin menampilkan desimal
    });

    return formatter.format(amount);
};

export {
    FormatRupiah,
}