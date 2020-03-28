class About {
  final String title;
  final List<Copyright> copyrights;

  About({this.title, this.copyrights});

  static About get defaultAbout {
    return About(
        title:
            "Feito por Hebert F. Barros\n\nPortfolio:\nhttps://hebertbarros.com \n\n©2020 Stay House - stayhouse.org. All Rights Reserved",
        copyrights: [
          Copyright(title: "Estatística e direitos autorais do mapa", license: '''
ArcGIS Corona Virus Datasets.
https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query

Reconhecimento de Direitos de Propriedade da Esri
Copyright © 1995–2019 Esri.
Todos os direitos reservados.
Publicado nos Estados Unidos da América.

As informações contidas neste trabalho são de propriedade exclusiva do Environmental Systems Research Institute, Inc. (Esri) e de todos os respectivos proprietários dos direitos autorais. Este trabalho está protegido pela lei de direitos autorais dos Estados Unidos e por outros tratados e convenções internacionais de direitos autorais.

A Esri concede ao destinatário das informações da Esri contidas no site esri.com o direito de reproduzir, redistribuir, retransmitir e / ou retransmitir livremente essas informações para fins pessoais e não comerciais, incluindo ensino, uso em sala de aula, bolsa de estudos e / ou pesquisa. , sujeito aos direitos de uso justo enumerados nas seções 107 e 108 da Lei de direitos autorais (título 17 do Código dos Estados Unidos). Todas as cópias, no todo ou em parte, devem incluir o aviso de direitos autorais apropriado da Esri.

Nenhuma parte deste trabalho pode ser reproduzida ou transmitida para fins comerciais, de qualquer forma ou por qualquer meio, eletrônico ou mecânico, incluindo fotocópia e gravação, ou por qualquer sistema de armazenamento ou recuperação de informações, exceto quando expressamente permitido por escrito pela Esri. As solicitações por correio devem ser endereçadas ao diretor, departamento jurídico e de contratos, Esri, 380 New York Street, Redlands, Califórnia 92373-8100, EUA.

Perguntas ou solicitações relacionadas a permissões podem ser enviadas por email.
Política do Digital Millennium Copyright Act
As informações contidas na página inicial estão sujeitas a alterações sem aviso prévio.
      '''),
          Copyright(
              title: 'Advice Copyright',
              license:
                  "WHO (Organização Mundial da Saúde)\nhttps://www.who.int/emergencies/diseases/novel-coronavirus-2019")
        ]);
  }
}

class Copyright {
  final String title;
  final String license;

  Copyright({this.title, this.license});
}

// struct About {

//     let title: String
//     let copyrights: [Copyright]

//     struct Copyright: Identifiable {
//         let id = UUID()
//         let title: String
//         let license: String
//     }
// }

// extension About {

//     static var defaultAbout: About {
//         About(title: "Feito por Hebert F. Barros\n\nPortfolio:\nhttps://hebertbarros.com \n\n©2020 Stay House - stayhouse.org. All Rights Reserved", copyrights: [
//             .init(title: "Statistic & Map Copyright", license: """
//             ArcGIS Corona Virus Datasets.
//             https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query

//            Reconhecimento de Direitos de Propriedade da Esri
// Copyright © 1995–2019 Esri.
//             Todos os direitos reservados.
// Publicado nos Estados Unidos da América.

// As informações contidas neste trabalho são de propriedade exclusiva do Environmental Systems Research Institute, Inc. (Esri) e de todos os respectivos proprietários dos direitos autorais. Este trabalho está protegido pela lei de direitos autorais dos Estados Unidos e por outros tratados e convenções internacionais de direitos autorais.

// A Esri concede ao destinatário das informações da Esri contidas no site esri.com o direito de reproduzir, redistribuir, retransmitir e / ou retransmitir livremente essas informações para fins pessoais e não comerciais, incluindo ensino, uso em sala de aula, bolsa de estudos e / ou pesquisa, sujeita aos direitos de uso justo enumerados nas seções 107 e 108 da Lei de Direitos Autorais (título 17 do Código dos Estados Unidos). Todas as cópias, no todo ou em parte, devem incluir o aviso de direitos autorais apropriado da Esri.

// Nenhuma parte deste trabalho pode ser reproduzida ou transmitida para fins comerciais, de qualquer forma ou por qualquer meio, eletrônico ou mecânico, incluindo fotocópia e gravação, ou por qualquer sistema de armazenamento ou recuperação de informações, exceto quando expressamente permitido por escrito pela Esri . As solicitações por correio devem ser endereçadas ao diretor, departamento jurídico e de contratos, Esri, 380 New York Street, Redlands, Califórnia 92373-8100, EUA.

// Perguntas ou solicitações relacionadas a permissões podem ser enviadas por e-mail.
// Política do Digital Millennium Copyright Act
// As informações contidas na página inicial estão sujeitas a alterações sem aviso prévio.
//"""),
//             .init(title: "Advice Copyright", license: "WHO (World Health Organization)\nhttps://www.who.int/emergencies/diseases/novel-coronavirus-2019")
//         ])
//     }

// }
