import { Document, Page, PDFViewer, StyleSheet, Text, View, Image, Font } from "@react-pdf/renderer";
import { useProductStore, useSiteNameStore } from "../lib/store";

Font.register({
    family: "Roboto",
    fonts: [
        {
            src: `/Roboto-Regular.ttf`
        },
        {
            src: `/Roboto-Bold.ttf`,
            fontWeight: 'bold'
        },
        {
            src: `/Roboto-Italic.ttf`,
            fontWeight: 'normal',
            fontStyle: 'italic'
        },
        {
            src: `/Roboto-BoldItalic.ttf`,
            fontWeight: 'bold',
            fontStyle: 'italic'
        }
    ]
})

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
    rightHeader: {
        display: "flex",
        flexDirection: "column", // Membuat elemen berbaris secara horizontal
        alignItems: "flex-end",
        gap: 10,
    },
    siteName: {
        color: "#535c68",
        fontWeight: "bold",
        fontSize: 25,
    },
    siteDate: {
        color: "#535c68",
        fontSize: 12,
    },
    subHeader: {
        marginBottom: 20,
        textAlign: "center",
    },
    subHeaderTitle: {
        color: "#130f40",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 5
    },
    subHeaderDesc: {
        fontSize: 12,
        color: "#130f40",
    },
    logo: {
        width: "250px"
    },
    hazardText: {
        fontWeight: "bold"
    },
    hazardOption: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        fontSize: 12,
        alignItems: "center",
        justifyContent: "center",
        gap: 17,
        color: "#130f40",
        marginBottom: 20
    },
    headerTable: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "red"
    },
    headerTableItem: {
        fontSize: 8,
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#130f40",
        color: "white",
        padding: 5,
        border: "1px solid black"
    },
    headerTableItemName: {
        fontSize: 8,
        flex: 2,
        flexShrink: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#130f40",
        color: "white",
        padding: 5,
        border: "1px solid black",
    },
    imageWrapper: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 5
    },
    footer: {
        position: "absolute",
        bottom: "10",
        fontSize: 8,
        color: "#130f40",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
    },
    contact: {
        color: "red"
    }
})

const Preview = () => {

    const base_url = import.meta.env.VITE_BASE_URL

    const { siteName } = useSiteNameStore();
    const { selectedProducts } = useProductStore();

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
                        <Image src={"/logo.jpeg"} style={styles.logo} />
                        <View style={styles.rightHeader}>
                            <Text style={styles.siteName}>{siteName}</Text>
                            <Text style={styles.siteDate}>{currentMonthName + " " + currentYear}</Text>
                        </View>
                    </View>
                    <View style={styles.subHeader}>
                        <Text style={styles.subHeaderTitle}>WALL CHART</Text>
                        <Text style={styles.subHeaderDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Vel ex nam libero porro doloremque asperiores cum velit consequatur commodi voluptatem dicta at,
                            quidem deserunt provident nemo repudiandae id accusantium voluptatum. Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Consectetur eum nulla alias obcaecati ab quis quae, dignissimos sit odio provident reiciendis
                            at iure assumenda perferendis tempore libero ipsam. Voluptatibus, voluptas!
                        </Text>
                    </View>
                    <View style={styles.hazardOption}>
                        <Text style={styles.hazardText}>Hazard ratings:</Text>
                        <Text>Low = Non-hazardous</Text>
                        <Text>Moderate = Signal word = WARNING</Text>
                        <Text>High = Signal word = DANGER</Text>
                    </View>
                    <View style={styles.headerTable}>
                        <View style={styles.headerTableItemName}>
                            <Text>PRODUCT NAME, APPLICATION AND AREA OF USE</Text>
                        </View>
                        <View style={styles.headerTableItem}>
                            <Text>HAZARD</Text>
                        </View>
                        <View style={styles.headerTableItem}>
                            <Text>PPE REQUIRED</Text>
                        </View>
                    </View>
                    <View style={styles.imageWrapper}>
                        {
                            selectedProducts.map((p, i) => (
                                <View key={i}>
                                    <Image src={`${base_url}storage/${p.product_image}`} />
                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.footer}>
                        <View>
                            <Text>Lorem ipsum is simply dummy text of the printing.</Text>
                            <Text>
                                www.simplydummy.com
                            </Text>
                        </View>
                        <View>
                            <Text>P: 1300 123 456</Text>
                            <Text>
                                ABC: 12 345 678
                            </Text>
                        </View>
                        <Text style={styles.contact}>Poisons Information Centre: 1800 123 456  </Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default Preview
