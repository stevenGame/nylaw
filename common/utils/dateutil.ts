/**
 * finnub date use unix timestamp need covert to JS date time
 */
export class DateUtil {
    /**
     * unix timestamp covert to JS Date need mutiple 1000
     * @param timestamp unix timestamp
     * @returns 
     */
    static TimeStampToDate(timestamp: number): Date {
        return new Date(timestamp * 1000);
    }

    static NewYorkTime(date: Date): Date {
        return new Date(
            DateUtil.UTCToNewYorkTimeStr(date)
        );

    }

    static UTCToNewYorkTimeStr(date: Date): string {
        return date.toLocaleString('en-US', {
            timeZone: 'America/New_York',
            hour12: false,
        });
    }

    static DateToTimeStamp(date: string): number {
        return Date.parse(date) / 1000;
    }
    static DateToNewYorkTimeStamp(date: Date): string {
        return DateUtil.NewYorkTimestamp(date.toLocaleString()).toString();
    }

    /**
     * return local timezone date now
     */
    static LocalNow(): Date {
        return new Date(Date.now() - new Date().getTimezoneOffset() * 60 * 1000)
    }
    /**
     * convert date string to Estern day light saving time zone
     * I.E. NYSE local time
     * @param date 
     * @returns new york timezone date
     */
    static NewYorkDate(date: string = ''): Date {
        return new Date(`${date} EDT`)
    }
    /**
     * @param date date of string standard
     * @returns new york timestamp in unix style seconds for finnhub api
     */
    static NewYorkTimestamp(date: string = ''): number {
        return DateUtil.DateToTimeStamp(`${date} EDT`);
    }


    /**
     * convert date to YYYY-MM-DD format 
     * i.e. 2023-9-16
     * @param date date need to be converted
     */
    static ToYYYYMMDD(date: Date): string {
        return date.toISOString().split('T')[0]
    }
    /**
     * add days to date
     * @param date 
     * @param day can be negative mean's subtract days
     * @returns date after or before days 
     */
    static AddDays(date: Date, day: number): Date {
        const d = new Date(date);
        d.setDate(date.getDate() + day);
        return d
    }

    static AddSeconds(date: Date, seconds: number): Date {
        const d = new Date(date);
        d.setSeconds(seconds);
        return d;
    }

    static ValidDateString(str: string): Date | any {
        let dateStr = str;
        let date: Date | any = null
        if (dateStr?.trim()?.endsWith(' ET')) {
            dateStr = dateStr.replace(' ET', ' EDT')
        }
        date = new Date(dateStr)
        
        if (date.toDateString() != 'Invalid Date') {
            return date;
        }

        return null;
    }
}

export class DateBuilder {

    private constructor(private timestamp: number = 0, private utcDate = new Date()) {

    }
    // uinx style builder
    /**
     * @param timestamp unix style timestamp
     * @returns 
     */
    static build(timestamp: number): DateBuilder {
        const builder = new DateBuilder(timestamp);
        builder.timestamp = timestamp;
        builder.utcDate = DateUtil.TimeStampToDate(timestamp)
        return builder;
    }

    public toNewYorkDateTime(): Date {
        return DateUtil.NewYorkTime(this.utcDate);
    }
    //////////////////////////////////////////////////
    /**    utc date builer    **/
    /**
     * @param date UTC stand date time
     * @returns 
     */
    static from(date: Date): DateBuilder {
        const builder = new DateBuilder();
        builder.utcDate = date;
        return builder
    }
    public addDays(day: number) {
        let nd = DateUtil.AddDays(this.utcDate, day);
        return DateBuilder.from(nd)
    }

    public addSeconds(sec: number) {
        let nd = DateUtil.AddSeconds(this.utcDate, sec);
        return DateBuilder.from(nd);
    }
    public utc() {
        return this.utcDate;
    }
    public toYYYYMMDD(): string {
        return DateUtil.ToYYYYMMDD(this.utcDate);
    }
    ///////////////////////////////////////////////
}
