import { Document, Page, PDFViewer, StyleSheet, Text, View, Image } from "@react-pdf/renderer";
import { useState } from "react";

const styles = StyleSheet.create({
    viewer: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    page: {
        padding: "30px"
    },
    header: {
        display: "flex",
        flexDirection: "row", // Membuat elemen berbaris secara horizontal
        justifyContent: "space-between", // Mengatur jarak antara elemen
        alignItems: "center", // Mengatur elemen vertikal agar sejajar di tengah
        marginBottom: 20, // Memberi jarak antara header dan elemen berikutnya
    },
    subHeader: {
       marginBottom: 20,
        textAlign:"center"
    },
    logo: {
        width: "250px"
    }
})

const Preview = () => {
    const [coba, cobaSet] = useState('hallow')

    const currentDate = new Date();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const currentYear = currentDate.getFullYear();
    const currentMonthName = monthNames[currentDate.getMonth()];

    return (
        <PDFViewer style={styles.viewer}>
            <Document title="tesst">
                <Page size={'A4'} style={styles.page}>
                    <View style={styles.header} wrap>
                        <Image src={"./example-logo.png"} style={styles.logo} />
                        <View>
                            <Text>ST JOSEPH'S</Text>
                            <Text>{currentMonthName + " " + currentYear}</Text>
                        </View>
                    </View>
                    <View style={styles.subHeader}>
                        <Text>WALL CHART</Text>
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ex nam libero porro doloremque asperiores cum velit consequatur commodi voluptatem dicta at, quidem deserunt provident nemo repudiandae id accusantium voluptatum.</Text>
                    </View>
                    {
                        [...Array(5)].map((_, i) => (
                            <>
                                <View>
                                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde veritatis rem voluptate laudantium. Quod nihil repellat quis, maiores tempore iste quisquam! Doloribus ex iure qui eveniet similique fugit vel.</Text>
                                </View>
                                <View>
                                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, tenetur! Aliquid quo, maxime perferendis eos accusantium exercitationem. Animi corrupti eligendi provident repellendus explicabo hic, nemo nihil repudiandae! Vitae, possimus commodi!</Text>
                                </View>
                            </>
                        ))
                    }
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default Preview
