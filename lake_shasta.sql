DROP TABLE shasta_prcp;

CREATE TABLE shasta_prcp (
	STATION VARCHAR,
	NAME VARCHAR,
	LATITUDE DEC,
	LONGITUDE DEC,
	ELEVATION DEC,
	DATE DATE,
	Year VARCHAR,
	YearMonth VARCHAR,
	TextMonth VARCHAR,
	PRCP DEC,
	TMAX INT,
	TMIN INT
);

SELECT * 
FROM shasta_prcp;


--create table for shasta water levels

DROP TABLE shasta_levels;

CREATE TABLE shasta_levels (
	Year VARCHAR,
	TextMonth VARCHAR,
	ResevoirStorage INT
);

SELECT * 
FROM shasta_levels;

---Merge Tables to Add Water Level in for every month in every year
SELECT p.STATION, p.NAME, p.LATITUDE, p.LONGITUDE, p.ELEVATION, 
		p.DATE, p.YEAR, p.TextMonth, p.PRCP, p.TMAX, p.TMIN, m.ResevoirStorage
FROM shasta_prcp AS p
INNER JOIN shasta_levels AS m ON
p.YEAR=m.Year AND p.TextMonth=m.TextMonth;
