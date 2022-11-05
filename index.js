var variableInfo = document.getElementById('variable-bank-info');

var tbcButton = document.getElementById('tbc-button');
var bogButton = document.getElementById('bog-button');
var libertyButton = document.getElementById('liberty-button');
var cartuButton = document.getElementById('cartu-button');

var tbcBlock = `<section id="tbc" class="bg-dark text-light p-5 p-lg-0 text-left">
<div class="container">
  <div id="selected-bank">Detailed Information on Selected Bank</div>
  <div class="">
    <div id="bank-info-box">
      <span><h1 id="TBC-title">TBC BANK</h1></span>
      <p>
        The history of TBC Bank dates back to 1992 when two Georgian
        businessmen Mamuka Khazaradze and Badri Japaridze, along with
        other Georgian partners founded the bank, Tbilisi Business Centre,
        abbreviated as TBC. They established the bank with an initial
        capital of $500, which was the amount required to establish the
        bank in Georgia in the early 1990s.[3] The bank was licensed by
        the NBG (General banking license No. 85) on January 20, 1993, and
        was granted another license to conduct international transactions
        in May 1993.[4][5] In 1995 the bank was operating with one branch
        and 29 employees, its total assets amounting to $1.4 million.
        Vakhtang Butskhrikidze, who joined the bank in 1993 was appointed
        to the position of chief executive officer (CEO) of TBC in 1995,
        and has remained in that position since his appointment.[6] On 11
        June 2014, London Stock Exchange welcomed TBC Bank to the Main
        Market following its listing of Global Depositary Receipts (GDRs).
        The Bank raised $239m at IPO, giving it a market value of $640m.
        TBC Bank IPO was also the largest IPO from Georgia and the largest
        international off-index IPO from the EMEA region.[7][8][9] In
        January 2019, the bank announced that it was being investigated by
        the National Bank of Georgia over the legality of certain
        transactions entered into in 2007 and 2008.[10] In February 2019,
        the bank was instructed by the National Bank of Georgia to ask its
        chairman and deputy chairman to stand down on the basis of
        violation of the legislation regulating conflict of interests
      </p>
    </div>

    <img
      class="image-fluid w-50"
      src="https://upload.wikimedia.org/wikipedia/commons/b/b0/TBC_Bank_building.jpg"
      alt=""
    />
  </div>
</div>
</section>`;

var bogBlock = `<section id="bog" class="bg-dark text-light p-5 p-lg-0 text-left">
<div class="container">
  <div id="selected-bank">Detailed Information on Selected Bank</div>
  <div class="">
    <div id="bank-info-box">
      <span><h1 id="BOG-title">BANK OF GEORGIA</h1></span>
      <p>
        Bank of Georgia Group PLC (“Bank of Georgia Group”, the “Group” or
        “BOGG” and on the LSE: BGEO LN) is a UKincorporated holding
        company. The Group mainly comprises: (a) retail banking and
        payments business (Retail Banking); and (b) corporate banking and
        investment banking operations (Corporate and Investment Banking)
        in Georgia. JSC Bank of Georgia (“Bank of Georgia”, “BOG”, or the
        “Bank”), a systemically important and leading universal bank in
        Georgia, is the core entity of the Group. The Bank is a leader in
        the payments business and financial mobile application, with
        strong retail and corporate banking franchises in Georgia.
        Focusing on digitalisation and expanding technological and
        advanced data analytics capabilities across the organisation, the
        Group aims to offer more personalised solutions and seamless
        experiences to its customers to enable them to achieve more of
        their potential. <br />
        npwadwadawdaw
      </p>
    </div>

    <img
      class="image-fluid w-50"
      src="http://eastpoint.ge/home/sites/default/files/bog.png"
      alt=""
    />
  </div>
</div>
</section>`;

var libertyBlock = `<section id="liberty" class="bg-dark text-light p-5 p-lg-0 text-left">
<div class="container">
  <div id="selected-bank">Detailed Information on Selected Bank</div>
  <div class="">
    <div id="bank-info-box">
      <span><h1 id="LIBERTY-title">LIBERTY BANK</h1></span>
      <p>
        Liberty Bank is the successor to the state-owned “AgroMretsvBank”
        which was privatised in 1994 and renamed to “People’s Bank of
        Georgia” in 2002. The People's Bank of Georgia had the largest
        customer service network in Georgia. Under the leadership of
        George Goguadze, the Bank opened 210 branches across the country.
        As Goguadze's strategy was to establish extensive coverage around
        the country, the Bank was able to win a state tender for the
        rights of issuance of pensions and other social benefits. At the
        end of 2008 which was the last year of Goguadze's executive
        operation at the JSC People's Bank, the Bank had 1.5 million
        clients which represent about 30% of entire Georgia's population.
        In September 2009 91.2% of its shares were acquired by Liberty
        Investments Holding B.V., a newly established joint venture of
        Georgia's former Prime Minister, Lado Gurgenidze and Romanian
        tycoon Dinu Patriciu, while the bank was renamed Liberty Bank.[3]
        In 2017, Liberty Bank announced a change of control, whereby
        European Financial Group B.V. , a company established and
        organised under the laws of the Kingdom of Netherlands, purchased
        74.64% of equity interest in the Bank. The ultimate beneficial
        owners of the Bank are Irakli Rukhadze (US Citizen), Ben Marson
        (UK citizen) and Igor Alexeev (US Citizen).
      </p>
    </div>

    <img
      class="image-fluid w-50"
      src="https://agenda.ge/files/special/libertybankimedi.jpeg"
      alt=""
    />
  </div>
</div>
</section>`;

var cartuBlock = `<section id="cartu" class="bg-dark text-light p-5 p-lg-0 text-left">
<div class="container">
  <div id="selected-bank">Detailed Information on Selected Bank</div>
  <div class="">
    <div id="bank-info-box">
      <span><h1 id="CARTU-title">CARTU BANK</h1></span>
      <p>
        Mission <br />
        Our mission is to make substantial contribution to the strategic
        fields of Georgian economy, by providing leading companies with
        superior quality and exclusive financial services.<br />
        Core values: Prime quality services and full range of proficient
        banking products; Customer’s high loyalty; Customer oriented
        modern and innovative financial solutions; Highly-qualified,
        motivated and success oriented team.<br />
        Vision Cartu Bank aims to become an outstanding financial
        institution that will: Set exclusive standards for financial
        services for the leading corporate clients in Georgia; Gain strong
        position among the leaders players of Georgian Banking Sector;
        Have highly qualified, motivated and committed team; Make
        substantial contribution to the growth of Georgian economy,
        development of businesses and improvement of living standards for
        the community. As the result, Bank will significantly increase its
        value for its shareholders as well as for the customers, employees
        and the whole society.
      </p>
    </div>

    <img
      class="image-fluid w-50"
      src="https://i0.wp.com/old.civil.ge/files/images/2011/CartuBank.jpg?ssl=1"
      alt=""
    />
  </div>
</div>
</section>`;

function tbcAppendSwitch() {
  variableInfo.innerHTML = '';
  variableInfo.innerHTML = tbcBlock;
}

function bogAppendSwitch() {
  variableInfo.innerHTML = '';
  variableInfo.innerHTML = bogBlock;
}

function cartuAppendSwitch() {
  variableInfo.innerHTML = '';
  variableInfo.innerHTML = cartuBlock;
}

function libertyAppendSwitch() {
  variableInfo.innerHTML = '';
  variableInfo.innerHTML = libertyBlock;
}

tbcButton.addEventListener('click', tbcAppendSwitch);
bogButton.addEventListener('click', bogAppendSwitch);
cartuButton.addEventListener('click', cartuAppendSwitch);
libertyButton.addEventListener('click', libertyAppendSwitch);
