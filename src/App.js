import './App.css';

import React from 'react';
import {
  Document,
  Page,
  PDFDownloadLink,
  Text,
  Font
} from "@react-pdf/renderer";
import robotoFont from './fonts/Roboto/Roboto-Light.ttf'

Font.register({
  family: "Roboto",
  fonts: [{ src: robotoFont }]
});

const App = () => <div>
  <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download now!"
    }
  </PDFDownloadLink>
</div>;

const MyDoc = () => (
  <Document>
    <Page>
      <Text style={{fontFamily: 'Roboto'}}>TEST</Text>
    </Page>
  </Document>
);

export default App;
