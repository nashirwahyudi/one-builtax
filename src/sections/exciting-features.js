/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import dynamic from "next/dynamic";
import { useMemo } from 'react';

const data = [
  {
    title: 'Update data terakhir',
    contents: (
      <div className="fs-32 text-success fw-bolder">
        10 November 2023
      </div>
    ),
  },
  {
    title: 'Bangunan baru terdeteksi',
    contents: (
      <div className="fs-32 text-success fw-bolder">
          Sebanyak 3 bangunan baru terdeteksi pada update terakhir.
      </div>
    ),
  },
  {
    title: `Nominal pemasukan terbaru`,
    contents: (
    <div className="fs-32 text-success fw-bolder">
        Rp. 23.699.000,00
      </div>
    ),
  },
];  

const ExcitingFeatures = () => {
  const Map = useMemo(() => dynamic(
    () => import('components/Map'),
    { 
      loading: () => <p>A map is loading...</p>,
      ssr: false
    }
  ), [])
  return (
    <Box as="section" variant="section.excitingFeatures">
      <Container className="mt-10">
        <div className="mt-5">
          <div className="row mb-3">
            <div className="col-4">
              <label for="provinsi" className="form-label fw-bold">Provinsi</label>
              <select className="form-select" id="provinsi" disabled>
                <option selected>Jawa Timur</option>
              </select>
            </div>
            <div className="col-4">
              <label for="kabupaten" className="form-label fw-bold">Kabupaten</label>
              <select className="form-select" id="kabupaten" disabled>
                <option selected>Kota Surabaya</option>
              </select>
            </div>
            <div className="col-4">
              <label for="kecamatan" className="form-label fw-bold">Kecamatan</label>
              <select className="form-select " id="kecamatan" disabled>
                <option selected>Kenjeran</option>
              </select>
            </div>
          </div>
          <div className="row">
              <div className="col-8">
                <div className="card h-100">
                  <div className="card-body">
                    <Map/>
                  </div>
                </div>
              </div>
            <div className="col-4">
              <Box sx={styles.accordionGroup}>
                <Accordion items={data} />
              </Box>
            </div>
          </div>
          <div>
            <span className="text-danger small">Hanya 10001/49169 objek bangunan yang bisa ditampilkan karena keterbatasan rendering browser.</span>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default ExcitingFeatures;

const styles = {
  contentWrapper: {
    // gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid', 'flex', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    flexDirection: ['column-reverse'],
  },
  illustration: {
    display: ['none', 'none', 'block'],
  },
  heading: {
    maxWidth: [295, 295, 495, 495, 410, 500],
    textAlign: ['center', null, null, null, 'left'],
    mb: [30],
    ml: ['auto', null, null, null, 0],
    h2: {
      fontSize: ['28px', '28px', '28px', '36px', '32px', '36px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
  },
  accordionGroup: {
    maxWidth: ['none', null, null, 600, 'none'],
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: [
        '20px 30px',
        '20px 30px',
        '30px 45px',
        '20px 25px 20px',
        '30px 45px',
        '20px 35px',
      ],
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
  },
};
