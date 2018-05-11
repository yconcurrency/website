import { h, Component } from 'preact'
import style from './style'

export default class Home extends Component {
  render () {
    return (
      <section class="content">
        <div class="full-bleed yjs-logo" style='margin-top: 1.875em;'></div>

        <article class="post">
          <div class="container">
            <div class="columns thirds">
              <div class="item">
                <h4 class="item-title">Automatic Conflict Resolution</h4>
                <p>Yjs resolves conflicts automatically on shared data.</p>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEBQQFhAXGRsWGBcXGRMVGBcXFhcWGRUaFR0bHSggGhslHRgYITEhJSkrLi4uFyAzODMtNzQtLi0BCgoKDg0OGxAQGy0lICYuLS0tLS0tLS8tLS8tLS0tLS0rLS0tLy0tLTU1Ly8vLS0vLi0tLS0tLS0vLS0tLS0tLf/AABEIAMEBBQMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgYFBwj/xABLEAABAwEFAwgGBgYJAwUAAAABAAIRAwQFEiExQVFhExciVJGT0dIGFjJxgaEHFBVTotMjQkNyscEkM1JiY2Rzs/CCsuE0dJK0w//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA4EQACAQIEAwUGBQQDAQEAAAAAAQIDEQQSITFBUfATYXGBwQUUMpGh0SIzQrHhI1Ky8VNyksJD/9oADAMBAAIRAxEAPwD7bUeZgQgNcZ4dh8UAxnh2HxQDGeHYfFAMZ4dh8UBnE7h2HxQDE7h2HxQDE7h2HxQDE7h2HxQDE7h2HxQDE7h2HxQDE7h2HxQDE7h2HxQDE7h2HxQDE7h2HxQDE7h2HxQDE7h2HxQGMZ4dh8UAxnh2HxQDGeHYfFAMZ4dh8UAxnh2HxQDGeHYfFAMZ4dh8UAxnh2HxQDGeHYfFAMZ4dh8UAxnh2HxQDGeHYfFAMZ4dh8UAxnh2HxQDGeHYfFAMZ4dh8UBmrr8EBRoXix9WpRbix04xaRmAcs52jUBAeYPSmnBOCpkQP1ds8eC4ff4WvZnN71G17Edt9LqdNr3mnUIY0OMYcwcOknirLGwvazOjCv3isqUdG/tct3B6QMtVJtVjHta5xbDsM9ExsK6adRTjmR04nDyoVMknc/MPpTfFoFttQbXtAaK9UACpUAAFR0ACclc5zy/tu09YtPeVPFAPtu09YtPeVPFAPtu09YtPeVPFAPtu09YtPeVPFAPtu09YtPeVPFAPtu09YtPeVPFAPtu09YtPeVPFAPtu09YtPeVPFAPtu09YtPeVPFAPtu09YtPeVPFAer6J3xaDbrIHV7QWm0UQQalQgg1WSDnogP096x0ACXktOWRBzxNxtjfLOl2jOCgNafpFTLiMNQAECSD0pdWa3AADJJpHLLJw9yAkff8AQAkl8aTgdAd0ZaTEBwxCZ0ngUFiWve9NhbiJhwaWmHfr4onLLJp28I0mbDhc0F+0SQAX5gOHQfGAloD9PYOIZqFqHoemgCAIAgCAIAgCAIAgCA2q6/BAV6dlY1znta0Pd7RjM+/sHYgMfU6f3dL/AOLfBU7OHJfIrkjyRh9hpGQaVIg5GWMMjjknZw5ItH8LzR0ZvQszGCGMptaM4a1rR2AKySWxaUpSd5O587vH6FrvrValZ9W3B9R7qjgH0QAXuLjE0tJKkqQcxd2/e3h3lD8lAOYu7fvbw7yh+SgHMXdv3t4d5Q/JQDmLu3728O8ofkoBzF3b97eHeUPyUA5i7t+9vDvKH5KAcxd2/e3h3lD8lAOYu7fvbw7yh+SgHMXdv3t4d5Q/JQDmLu3728O8ofkoCewfQrd9KrTqtqW4upva8Bz6JaSxwcA6KQyy3oDvql20iZNNpO/dkBluyABjWM0Bn7OpTi5NkzMxtBJB7XOP/UUBX+xKPKGpBmIw5BoJLSXCAHYuiM52IDf7HoyegMOFrcOWEBuIQAN4cQRpGSm4sSsu6kJimwTw2GMvd0RlpkoBaQBAEAQBAEAQBAEAQBAK+oz2cFKIZHnvPy8FNiLjPefl4JYXK9ptjWe04zIEDCSMRgEjdxUWJuTMfiEtdI3jCRlrsSwubZ7z8vBTYi4g7z8vBLC5s1uUyfl4KLEgRsdx/V8EsDLhAkuIG84R/JLAw2Do6fdh26bEsAIJIDsxqOjI9+SWJD4Gro9+EfySwMtE6OJjI+zru0SwMNg6OnZlhOfYliBl/a4fq69iWBtg4n5eCWAwcT8vBLAYOJ+XglgMHE/LwSwGDifl4JYDBxPy8EsBg4n5eCWAwcT8vBLAYOJ+XglgMHE/LwSwGDifl4JYDBxPy8EsBg4n5eCWAwcT8vBLAYOJ+XglgMHE/LwSwGDifl4JYCtr8EQZorEBAVLZYy8hzXQ7IZgEYQZMcSoBYoUsLQ0EkDfH8kBupAUAyWS2OARkogoWMtIOWUn4meGevBAT1aU7TPvMCIjKeCgGjKJaIaRoGiRu2nPPUqQbU6EOc6ddn/D/AAj4qAaVrKHTmczvOWWExnlkgJAxwJgiC6dNkRGuuQUg1oUMIImZ/wCb/wDxwUcAV2WEgzI1nsiIy+XzUgvIAgCAIAgCAIAgCAIAgCAIAgCAIAgN9vwVSTMICo+q4F2kDbE7Rl7yJQFoj+SAzCAgtDyC3CJBMHtE/CJPYgN7O6RnBMkaRocvkgJG6IDKAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA12/BAbICs+1EFww5jMSSJ04ccolATnTsQGyAhr18JblIJAnPKSANnH5IDahULhJAGewyDxGQQG7dEBlAR1bQxvtOa33kD+KhtLctGEpbIgdedAa1qI/62eKjPHmXVCq/wBL+TFqtobS5SnhfMBkGQ5zjhaJGyTmdgkqU77GcouLtJG1mtBe94AGBhDZ3viXxwEtHvkbFJB5VpvmpTL8QpHC8tHtDEG021IGftuxQBwJz0Ra2642D0162uQ0/SNxw9GlnBkOOYdyf6Mf4n6TTgN+SOtuuX3D0v1z+xyv00+ktos9io1rHVdSebQ6mS0sdIYKoIykasBjUaGDIQHxnnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQDnKvbrtf8HlQH6y2/BAbICrVqM6UtBjMyBnG3PcgLB07EBsgIqz2gjEM9mWkkD+JA+KAWctjogAAxAgZ/DJASN0QBzgBJIAGZJyAQlJvRHy/6RLxs9sw07K19avSlxfTbiY1kdMOdtGQMjLI5rzsTOFTSOrR9R7IoV8LedZqMZcG7Nvhoc36F+jZtlcNIigyHVXDdsaOLo7ATuWFCj2krcOJ6ftLHe60r/qei+/kfa62Gm1uGmXBvshrQcMMdEbsgW/9UL1vhskj4ZXm22/n49M0db6TAc4AcQYa+MXSc7MCDEOJI0gymdFlRm9l+3XhzFS8KOUmc/7LjBlwkwMgMJzOkJmQVGb4GGW6kQMnDpuYByb5xtxSQMPA5opoOjLu2vuiledGyWoNp1qNOvTH6SHsaWs6IOM442P2ScymdB0ZJa6dfweS70cucR/QrJn/AIAGEQTL5aMIgSJidkqHUj15/Yn3efTX05m9m9FbqqEcnd9lc0/r8gwNnpyDIkEYM8v1m70U7vQidJwX4t+Xy+/0Zc9RLs6jYu6p+CuZD1EuzqNi7qn4IB6iXZ1Gxd1T8EA9RLs6jYu6p+CAeol2dRsXdU/BAYHoHdnUbH3TPBAZ9RLs6jYu6p+CAeol2dRsXdU/BAPUS7Oo2LuqfggIHeht1mmajbvsrhhLgBRYHGBoAQDJ+ChuyuWjG8kr2Kdo9HbpY4tdd1nkNc7+po6N5Q7TOYpkjZmM1R1EnaxtDDykrprl+3d3lmzeiN2PIAu6zAETiNGlhyjKROefyKunczlTyrdFr1EuzqNi7qn4KTMeol2dRsXdU/BAPUS7Oo2LuqfggPcq1g05zoobsWjBy2Nfrjdzvl4qMxfsmV32ikS4mZjpZgQOOeSZh2TJja2xo7Zu3+9TmHYs2+uN3O+XiozDsmR1K7HRIORkaa9qnMOyZmnaGjQOzzMx4pmHZM569PTmiwilZmvtNpOQp08wD/ecJiDrExthYTxMU7R1Z6ND2RVms9VqEOb9F/o8x11Wm1um86rmUtRZqOQ3jlHTme33hZdnOp+Y9OSOpYihhlbCRu/75ei/0dRd31egzk6NMMZuAGfE7zxK6YqMVZI8qt21aWepK7IrnbZbMx1OgMLQ4vcIJILyIngAWgbgAopqEFaJbESr4iSlU1drLy6+Z6htjBMkZZHMZTpOavmRzdlIrVKNB2IETnJGIwCQ6cpykF0jbJlRaJonUVmuuuHIwKVDpGBmSD0tpmRrl7RyG9LRF6uiMmvQY4ZgOLiRmT03ENdGeRl4y3uROKGSpJeX06QoWOk0AQ4wXGdJL3YnzEAgnZpkEUYpWEpzk7+H00Q+pUcugct5cZyI6UnpZGBMxsUZYjPU59ehZoua0YW4o4kuPaTKujOSbd2b8uOKXIyMcuOKXGRjlxxS4yMcuOKXGRjlxxS4yMcuOKXGRjlxxS4yMcuOKXGRjlxxS4yMhbaKdOnOlNrSZmYaBJMzmoclFXeyJjTlJ2W7IK3IPJc4YjBGRdMNxNMNBzIlwkCcyqvK9TSKqRVl1t/BtXqUzRILnim5sYgXF0PyBBMmc8lZtJFOzk5W4mzLzpRkeiIzgkZxhE6TmMtc0dRbk+7zWhYZaQQCJg5j3FTcpkaM8uOKXGRkFu1HuUSL0eJWVTcrVbJinMid3z1ka+5CCZ5gZ8M/iEJSMseDm0gjgQUuS01ueLfXpRRs7uT6VS0aClT6TpOgO7+PBY1K8YabvkdmGwFWss20eb2PM+zLbbc7W/6vZz+xp+24bnnx7As8lSr8ei5HV2+Gwv5Kzy/ue3l15nS3Tc1ChSwUaYaHAYiJDnZfrO9o9q6IU4wVoo8rEYmrXleo79cESPsoBgOAG4uJPaZKsykHZWsa8h/eZ2qLFs3cyy+zh1Ms3iJEdoVraGam1K5VqXQ1znOc55Lt+GMw4ZZf3j2BUdNPrx+5oq7SSS60+xE65QS/E4gOkCA2YcKodJIznlXe6AoVPV69a/cssRa1lt/H2Fe5pJLXulzpOKDDc5Ay1zU5O/rpBYjSzRdsVhbTBDc5M5xPBWjFRVjKpUc3dllWMwgCAIAgCAIAgCAIAgMoCGzUAxgZqAI0aJ+AAHYFANHWNpqCp+sI3bBUH/6HsCrlV7miqPLl64fYhddbCwMJcYDWyTOTYiW+ydANEcbosqzUsy6v37mbHdraZlueQGYZoA0CCBIHRGWiRgo7EVKznuWKdNwe4l0sIaGtgDDE4jOpJn5DirmXElQGbdqPckiKPErKptcqVbO4lx2HTTXjIIgfzQHk+kV01rRUpNxAWYRjgwSSc8ogwIid5WFWnKbS4HqYHF0sNTlK34+HLrmeHbLI2y2yiyyOdicWh7JnV0Q7gWyYOkSsZRUKiUD0aVaWKwk5YhKyvZ+XDz+ex2zLHTFQ1QxgquABfAxEDQTrC7Mqvc+edWTgoN6LhwJ1Jncka0lgAJaSNREjLUSCO0KTOW5UfZXzq5/944QT78IA+ShmkJJKxr9WduPyUWL54l+i2GgHWFYwk9TdSQEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBASWjUe5VqHHV4ESyMQgI7S6GkzECZ3RtRl4K8krcUc56F3dSa19YVG1qpcQagDhGQJHSzkzJPFY0opa3ue57bxVaUo0nFwil8Onp9DF+2y30Kxq02Nr2TKabBFRgEYjoZnPfroNUlKcXe10YYSjgcRSVOcnCpzfwv7fTxexe9HPSKjamnA/9ICZpuhrx8NoGk8FeFSM9jlxns6vhX/UWnBrZ+Z7eeDoxijKZieMLZbHMtjyJqwOVjlMLcWGcOLCJhc9X43Y5Kt87GfH5rPUy1GfH5pqNSWzUnOJGJ7cjmOIjb75+C0pptnThpZZO6v4+KN7Y6u3HyTXOJdLZLYjk9OkdMYiMvayWzzLbmejTVKVs7tpr8+7u8SK0Wi0N1GRdlAaTmXANidIDSTrn2Q3JWLwhRlty7+7XrQ3dWtOUMPtAH2II6OI66ZuOw5JefLrT+SqhQ1u+Hf329CGx2i0viRDJhxhoPs08UZ6AmpBG4TOhJyZepChC9t/9/wAX6t69CmWtguc7idVokccnd3tYkQqEAQBAEAQBAEAQBAEAQBAQ2wuDHGnOODhgNJmMoDiAfiQhKM2mkXCA5zeLdVDVy0JZXe1/EqY64Lsg5s5ThEAExtzkQUju83W/8GtqLS1sehaNR7laoYVeBEsjIIDSswFpB0OR9x1QmMnFprgUrupWei42ejga+OUNMOl0ZDFBMxoFWKjHRHViamJxCVerdra9tOdjyvSK+LVZaoqck2rYoAcGf1rTPSd7s/dlmQqTnKLvbQ68FhMLiqfZ58tW+l/hfd1ryTK/2ZZLyYK9M4Kw/aU+g9royxCc/jnuhQ4Qqao0hisZ7Nl2NRXj/bLVNd3XiiNt7W6wiLZTNpso0rU/baP8RvjH7xTPUpL8Wq5nQsNg8drh32c/7Xs/B9eCJ7d6fUW2elWpw573AGliGJgGdSY0y0nWRxV54iCV46mWG9i16lWVOostlvwb4W62OqslqbVY2pTIcxwDmkbQVsmmro8qpTlTm4TVmtGSqTMIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAICR7JOe5aOKZpKKe5jkBxVezRXs0Vn1mAkdKR7v+D4pkQ7NFg0RG3Z/FOzQ7NHL+mdxPOG22PK10c4+9picTDvMTHvI3Rz16P64bo9j2biKaTw1f8ALn9Hz68T0rkvqjaaNOsyel0SJEsfIBafi4e8ZrSk41I5kcOLwMsNVdOXl3rmeReHonLvrV2vNntOpb+zqbYe3QT2Z6bVSeG/VB2Z34f2inDscUs8PqvBklxelbS8Wa3MNntYyh2TKmwFjtM9057CVFOsr5Z6MjE+ycsO2w7zw7t14rrvSOH9I/R211LTVqUrG9lIuOENDMwMsRAOrvaPvXLVozcm1HQ+gwWNw9OhGE6t3bW9/l5bHQ/Ry61UHGzWihaG0XS5jix+Fj9XAmIDXa+/3rbDZ4vLJOx5ntmGGrrtqc45lo1dar7r9vA7a021rC8Q4hjA50b3EhjG73GDlxbvXblPnMqF5Wo0mNdgLnOcG4RiMEgk+y1xMQdAmVXsMqsVat/UWh5djhhLSYyluPHhmMWHA+QM8pAIhSopjKif7SYA4vbUaGueM8JnkwS4iCcoG2FGVdeNg4pdeZo6+KQIBFXN7mDo68m/A8jbhDoHxkSM1OUZUWLZaCx9JjWOdyjiJkANAaXEnadNAiiMqKpvmm0NNWWk45ghwbgLgdziDhMHCoshlRLZrzpvc1kPa52IQ7C3NhII16R6JPRnLMxITKMqPQ5MJlQyocmEyoZUOTCZUMqHJhMqGVDkwmVDKhyYTKhlQ5MJlQyocmEyoZUOTCZUMqHJhMqGVDkwmVDKhyYTKhlQ5MJlQyocmEyoZUOTCZUMqM7fgrFjZAV6pZ0pnLX2jEbo+cICbZlpkgNkBwV9Ufs21C10wTYqxAr0xPQdIioBpqZ95I2iOOa7GedbPc97DyXtCh7vP8yPwvmuXXjwO1sVRjmB1IgsOYInOQIidkQuxO6ueFKLi3F7oq3zclC1U+TtDA4bDo5p3tOxUqU4zVpG+GxdXDTz03b9n4nLCtbLryqY7Vd40f8AtaI/vb2js/d0XNepQ31j9Uetlw3tDWNoVeX6ZeHf1rudfdV6UrRTFSg9r2HdqDucNQeBXTCcZq8WePXw9ShPJUVmVn22zTWBLZpva6pr/WYWYJ3mMEe4bk7SOuu3qT7vUtF2+Lby/wBFt9ronNzqfRg5lstJBgncYJVsyM+zm+BWq0rI/GHts56Rx4mszcGuJxSMzhLvhi4opLgHSly3/wBG1dllcSHizE4wTiFM/pAIEz+tAI3pmXMdnPez/gValnloLabumcMNDg15c3Ech0TieCTxJTMiVSlZ6dalxjmPhzcDoLgCIMOBLXgHYQQQfiFJmVKFloVBjFGnk58EsZOLE5r3D3nFnqZO9LC5vYbqo0g0MY0YZLTAJBcXF0HZOJ2m8oC6gCAIAgCAIAgCAIAgCAIAgCAIDXb8EBsgIHWdskknPI6aZT2wgJnf87UBlAVbfYWVmllUSwiC3+0DsPZ8lDSasy8KkqclKLs0ch6OWh1gtH2fXcTQeS6y1DxOdMnfJ7TxC5KUnSn2ctuB7OMhHG0feqa/EvjXr1w8Gdw3Rdh4ZkhAfO/TW7qdgItljqGz13uwmm0Asq7T0TkANd3AEyuGvFUvxwdny5n0fs2vPGL3evHPFLd7rz6fkct6F38aVqPLucaVc4apJ/WLpY8+5xIPBxXPQq5Z68T1PaWDVXD/ANNax28Lar5fVH1uvctJ+KZAeSTGHUzOyTMkwZgwRBAXpOnFqx8hHEzjbu66+p49svqwOLqbq7pLyyA2of0gaaT2t6Bk4TBA3giCococ+uJvTo4iNpKPDu2vdPck9Lb2sVipsqW1zmMdUdhOB1TpvxOcIDTAOf8AJXyI5lVmr+S+Wx4Fl+li5mYsNoqdIlx/Q1tTuAYB47VMY2KTm5WuSUfpdudoj6zVOZOdKufaJJHsaZwOCkoR2L6WLmpMwNtFTCCSByNUYQSSGiGABomBwAQE/PFdHWH9zX8iAc8V0dYf3NfyIBzxXR1h/c1/IgHPFdHWH9zX8iAc8V0dYf3NfyIBzxXR1h/c1/IgHPFdHWH9zX8iAc8V0dYf3NfyIBzxXR1h/c1/IgHPFdHWH9zX8iAc8V0dYf3NfyIBzxXR1h/c1/IgO7pVA5oc3QgEe4iQgN0AQBAaE5/BAbYhvCApVrLJcQRnskfHZ4/BLC5bnICRsQG2IbwgILRSxFpBAgzs2EHdw4IDyL99HWWmzGi4gPBxU3jVjwAAd8GM+B+Kzq0lUjY7MDjJYWrnWq4rmiv6FX86q11mtPRttDovB/XA0eN85T8DoQs6FVy/DLdG/tHCRptVqOtOWq7u7rw4HTSug8wo3lc9ntEcvSpVCMgXAEidYOxUlTjP4lc3o4qtR/Lk14Hi2n6P7A/9kW/uvqD5EkLJ4Wk+B3Q9tYyP6r+KR0VjoCmxtMOc4NAaC4guIGkkASVvFWVjzak88nK1r8tj5zenolbDVqPospgBtUUSagEVK7yatV24w5wG6GblzzpTbbXl6nr0sbRUYqb4q+nCK0X0V/PmafT9d1evYqDLPRq1SK4c4U2uqOA5OoAcLQTGevu3rpPG0sfCPVK8Oo2/uK/lQgeqV4dRt/cV/KgHqleHUbf3FfyoB6pXh1G39xX8qAeqV4dRt/cV/KgHqleHUbf3FfyoB6pXh1G39xX8qAeqV4dRt/cV/KgHqleHUbf3FfyoB6pXh1G39xX8qAeqV4dRt/cV/KgHqleHUbf3FfyoB6pXh1G39xX8qAeqV4dRt/cV/KgB9Erw6jb+4r+VAfr67hFKmDkQxoIORHRGqAsSgEoBKAhra/BSiGaKSAgPOvO0OaQAS1stOINmSXRhk5Z7h8UBcstQuaC4QdogtjPcUBKgCA5j0vul4wW6yZWqiBIH7Wntad+Xykbly4im79pDdfU9f2bioZXhq/wS+j5nqej9/ttVNlSmIDpBEglrgDIPy7Qdy2pVFUjmRxYvCzw1V058PquZ6lWrAPATJ07Vc5irUtxBcABAjP34deBxa/8AmDBNWtUNBETlIy6Mic8x/wAKlglqVIEwTppxUAr1rYRMYScWH4QDHA69ikG9ltWKZgZwPD35FAafXDLR0TLiDHB0ZdsoDe02rCYidNsamFAJLNWxCSIzhSCVAEAQBAEAQBAEAQBAEBhAEAQBAKjZPwUIM1eyBJIA3nJTcWNXQJlzRGuek6SlxYy+hOoaRIOeec5FRcWNuSPBTcWNMsuk3PIZ6ncouLGWNnMFpHAypuLG7aeUGNFFxY4e9LObstX1umP6DWIbWYP2Tzo9o3HxG5cUr0J518L3PeoNe0KHYS/Mj8L5rl148zuKTg5oc0gtIBBGYIOYI4LsTT1R4couLs9zbApuVMCn7s9UuDOFLgYEuCvStFN+bXNMGN3SLZgTtg/NQpJl5U5R3RvyzP7TM5jMZxrG+EzIZJcjVtVji2CDiBLSBIIETnpt0TMg4SV78DV9ppMAl7A0zEbYBJiNwBUOaRMaU3siam8O0IOvyMH5q1yjTWjNTWZiLS5mIDERIkA7TwyU67kXV7GeVbE4mYYmZERln8x2oLrckwqLgYUuBhS4GFLgYUuBhS4GFLgYUuBhS4GFLgYUuBhS4M7fgoJMVmS0iYkRv1QFapYZJJOZ4do104cSgLUQAN0IDZAVX2SSCToZ04g794CAkstDAImePwA/kgJW6ICK2WVlVjqdRodTcC1wO0FRJKSsy9OpKnJTi7NHG+jVpfYLQbutDiaLpdZah2gnOmeM/PgWhctKTpS7OW3A9nG044yj73SX4lpNevXozuF1nhhAEBHaKoY1zzMNBcY3ASUB8ttf0v3RULHH62C3SKTYMlpzz/ujsVXFN3NYVXBNLj16lRv0oXQA0B9vDW4THJtg4G02iRO6mO0qvZo0eKk7tpa3+rb9SVn0r3SGYMVt0IJ5JgkOYGEZZDIDQDRTkVreP1Kuu817dXuYo/SrdDXteHW2W7OSZDiBVAnP/FdpwRQSd+uP3JliJOLjbf8Aj7Iu89F1Yw+bVIaWxyTNpB1mdmkxwVznIrV9MF01MWI2yHswOHJMggEkanie1WUrFXG9/CxXtX0q3Q9xcXW0SQYFJkAg0zIzn9k3bvUqdl13/ch003frh9izY/pluynIxWo0wGtY3kWgMDWxsdmSfhpAVW7u7LJJKyLXPfdf+a7seZQSOe+6/wDNd2PMgHPfdf8Amu7HmQDnvuv/ADXdjzIBz33X/mu7HmQDnvuv/Nd2PMgLV1fS/d1orUqFL6zylV7abZpgDE8gCTiyGaA+gIAgCAIDXb8EBraGEtIGpGWcICubO6XHLOIEkbiJy2ZoC2fBAZQFN1ncSNAA4nUnKQd3Aj4+9AWLO0gQd52k5EkoDduiAygPH9KbhbbKBpk4ag6VN+1jxod8b/GFlWpKpG3yOzA4yWFq51qtmuaKHoh6RGox9G1wy12fKriIALRpU3Rv+B0IVKNW6cZ7rc6PaGCVOSqUdYT+H7dejPdu28KdemKtFwdTJIDhMHCS0x8QtoTU1dHBWozozyTVn9y0rGRXvGmXUqjWiXFjgBvJaQEB+XOae+Opu72zfmIBzT3x1N3e2b8xAOae+Opu72zfmIBzT3x1N3e2b8xAOae+Opu72zfmIBzT3x1N3e2b8xAOae+Opu72zfmIBzT3x1N3e2b8xAOae+Opu72zfmIBzT3x1N3e2b8xAOae+Opu72zfmIBzT3x1N3e2b8xAOae+Opu72zfmIBzT3x1N3e2b8xAex6HfRpetC32StVsrm0qdem97uUs5hrXguMCpJgZ5ID9JoAgCAIDXb8EBraCcJiZjKBJnYgKr3vl3tRsgaaQdNNZHBAXDp2IDZAU3PfIjFGIySNkjhpE58EBNZSSJOLXaIIHHIICVuiAygMEoD4l6e2iu+0l9oocgSMDduNoJIl46Lz7tMgvJxDk53krH3HsqFGFBRpTzcX3Pw3R230SWnFZalPayqex7Wu/jiXVg5Xg13nie36dsQpc1+x0lKq9jqpwVHMdVY1gAJIxCm17+kQBTBlx/dcRMgLsR4R6iAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAICCucxG5Um7GdRtbEeM7ysszMsz5jGd5TMxmfMw553nUfxCZmMz5mcZ3lMzGZ8yo63OkCQZcQYPEDtgz8OybvmMz5k1mtBcDJ0MZaHTif4pmYzPmS8qQyQHOMaCJPASQO0qybsaJs0sNpc+mx72Opuc0EsdEtJ2GD/wA4KzF2T4iouxdkVqs7KjSyq1r2HVrgCD8CoaurMvTqzpyzQbT7jzLj9HqVkfUdZy9rKmGWEyAW4oLSc/1jkZWdOmoN5eJ1Yr2hVxMIxqbxvrzvbf5HD3l6QWynVeH2mq1lPla1UAUejRxltmptlh6b+iJP3jVSU5J77dJHq0cNRnBWgruyWr3t+J77LX5Hcekb34aeG0mzw4FxAYcbBGJoxAwcxB2LaTdr3PIwlm2nHNppvo+ehxdsvK2U2OJt9d9TkeUa1tKzZFr2tfMjpNh0yJykiYE5Scop/iPWhSoTkv6aSvbeXLTjv66FmheFqzY+3WgOFQAPNOytbUYG1C4sieg7B0X65jJWTltfiZyp0viVNbbXlo9N+9cUVrdfdraK5p2qu6lTFMtqBtncHNNSKzh0RhLRibgP3ZMqM0ub4GkMPRbinBXd9Ly3tot+Ojv3nXWGvVdZKv6apjDqjW1Xik0hocQ1+XQIDcwdogxsWibs7s8uqoqvG0dNNFfltzOcNa2Pdip3hW5J7v0ZFOzPBZ+iIaHQJfFQmIiKblRqX93Wp32oRVpUldb6yWuvDlp9UdG91b6gP6S5taGk1ixhdPKCW4BLcZHQgT0jlKvrl3OBZPefg05XfLnvbj4HKttVsLg0XlVOZxfoaAOH9PBa2MRd+izbEjFtVFmbtmPScaCV+yX/AKl3d9uJNXvS0030QbY94eXUnCKDQ54bVh7CBPtMYC3Tpt1lRmlprw9CsaNKcZWha2u72utH5PfuIrttdtdyDql4ViXhrn020aIIk08TQ4tAOHGcRBluA5JFy0vLrQtVhQWZRpLS6Tu+/hfjbTnc+i0nnCMzoP4LVN2PBk9WbYipuyLsYil2LsYil2LsYil2LsYil2LsYil2LsYil2LsYil2LsYil2LsxaNR7kqCrwIlkZBAYf8AzH8QhBlCSB1qAIBBkmNm8CfmFIJKNUOEjSY/8qASYw1mI6ASVdbGi2NbHaW1WNqMnA4BwkQYO9WasSTKCAgCA5613dYmlz7RZLK3ET03U6TsbpdrlMmAc96zait0d8KmIklGnUk+67062LFsdZ7QWsq0GVofhAe2k8NJDukMRj9QjLPJS2paWKQjVpJyjPLpfRtX20+pTfddgBb/AEGzYXTDuRo7HMaDpoS738FX8PI1VXFNP+q7rhmfe/noYsV1WGo1jhYbKA8kCaVKRDS7MFsg5GOGeSRUWk7CrVxNOTi6stO987cyN1hu8cnisVlbja58GlQkBrcWgGcwexReGl1wuXUsW81qsnZpbvi7HoUn2cMNnp0GhhBBpBjGsl2PouA6PSwO3hWutkutfsc8oVXLtZT87u/DXnpdElnuizAtaLLQaW4nNinThskNMEDIuEabArqK5Gc8TWbf42797NzZqJ/onI0TZwzEWFgwe2MADYwkSCeBATKrWKdrUUu0zPNzvr8zT1XsPVLH3NLyqMkeRr77if8Akl82PVew9Usfc0vKmSPIe+4n/kl/6Y9V7D1Sx9zS8qZI8h77if8Akl82eqBGQ0VjmMoQEAQBAEAQBAEAQC0aj3KahNXgRLIyCAw/+Y/iEIMoSefW9ofvH/cpKQSXV7J/eP8AJGC/S0HuVlsaLYjsf9Wz91v8ArPckmUEBAEB5HpJ7DP3nf7FZY1f0+PozswfxPwX+UTxKGtb/wBxT/3HqsP/AK9DuntD/rL9kTUPaqf6tT/eoqI7Px9UUntH/qv8ZEbf62h/q0//AK1JH+YvH0Rd/lz/AOr/AM5Af1Nf3N/37Qj+B+H3H/6Q8/8AGJFcP9fZv3D/AN1pVaf5nkv3kWxf5NTx9IHRP/8AWs/0H/7lJda4+XqeI+Hn6E7v/UD/AEnf97EXHy9R1+xcQgIAgCAIAgCAIAgCAIAgCA//2Q==" alt="Sample Image" class="item-image" />
              </div>

              <div class="item">
                <h4 class="item-title">No single source of truth</h4>
                <p>The conflict resolution algorithm used in Yjs resolves conflicts automatically on each client. Therefore, Yjs can be scaled indefinitely in any kind of network topology, without relying on a central server to work correctly.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehl17LC8_GzGNWAkb2UM-ByRGIGrtf2I3RtOLN7x3tD3SHIKW9A" alt="Sample Image" class="item-image" />
              </div>

              <div class="item">
                <h4 class="item-title">Shared Types</h4>
                <p>Yjs provides shared counterparts to the most used data types: YMap, YArray, YText, and YXml.</p>
                <p>Shared types can be manipulated as any other local data type, but changes created by remote peers will eventually merge-in.</p>
              </div>
            </div>
          </div>
        </article>  

        
        <article class="post"> 
          <div class="container">
          
          <h3>This is another section sub-title</h3>
          
          <div class="columns thirds">
            <div class="item"> <h4 class="item-title">This is the post title</h4>
                <img src="http://y-js.org/images/yjs.png" alt="Sample Image" class="item-image" />
              <p>From beneath you, it devours. Y'all see the man hanging out of the spaceship with the really big gun? No, Angel, it's not you. If I was blind, I would see you. Yes, I'd forgotten you're moonlighting as a criminal mastermind now.</p>  
            <p>The human body can be drained of blood in 8.6 seconds given adequate vacuuming systems. Actually, I was fired from a fry-cook opportunity. I'm a comfortador also. Oh my god, I find lentils completely incomprehensible. The human mind is like Van Halen; if you just pull out one piece and keep replacing it, it just degenerates.</p>
              <div class="social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google"></i></a>
                <a href="#"><i class="fa fa-envelope"></i></a>
              </div>
              
          </div>
            
            <div class="item">
                <h4 class="item-title">This is the post title</h4>
              <p>I saw their production of 'Giselle' in 1890. I wept like a baby, and I was evil! And zombies don't eat brains anyway, unless instructed to by their zombie master. It's about power and it's about women and you just hate those two words in the same sentence, don't you? She is the slayer. I recognize the council has made a decision, but given that it's a stupid-ass decision, I've elected to ignore it.</p>
              <p><img src="http://y-js.org/images/yjs.png" alt="Sample Image" class="item-image" />
              </p>
            <div class="social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google"></i></a>
                <a href="#"><i class="fa fa-envelope"></i></a>
              </div></div>

            <div class="item">
              
                <h4 class="item-title">This is the post title</h4>
              <img src="http://y-js.org/images/yjs.png" alt="Sample Image" class="item-image" />
              <p>Everybody started singing and dancing. I saw their production of 'Giselle' in 1890. I wept like a baby, and I was evil! So, are we gonna sing army songs or something? I am obsolete. This must be what old people feel like, and Blockbuster. In their resting state, our actives are as innocent and vulnerable as children. I'm a rogue demon hunter now. Hey I could whip up a love slave any day I wanted. Oh my god, I find lentils completely incomprehensible. Well we could grind our enemies into talcum powder with a sledgehammer but, gosh, we did that last night.</p>
            <div class="social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google"></i></a>
                <a href="#"><i class="fa fa-envelope"></i></a>
              </div></div>

            <div class="item">
              
                <h4 class="item-title">This is the post title</h4>
              <p>It's funny how the Earth never opens up and swallows you when you want it to. Why can't you just masturbate like the rest of us? It's a real burn, being right so often. They need to take seven and they might take yours. We're old friends from Navy. Friends from Old Navy. I worked retail, he'd come in, buy slacks My entire existence was constructed by a sociopath in a sweater vest; what do you suggest I do?</p>
            <div class="social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google"></i></a>
                <a href="#"><i class="fa fa-envelope"></i></a>
              </div>
            </div>

            <div class="item">
              
                <h4 class="item-title">This is the post title</h4>
              <img src="http://y-js.org/images/yjs.png" alt="Sample Image" class="item-image" />
              <p>Stay away from hyena people, or any loser athletes, or if you see anyone who's invisible. From beneath you, it devours. Somebody put her tiny little thinking cap on! We'll have to call it early quantum state phenomenon.</p> 
            <p>Only way to fit 5000 species of mammal on the same boat. I've seen the best and the worst of you. The only thing Willow was ever good for, the only thing I ever had going for me were those moments, just moments, where Tara would look at me and I was wonderful. We've got a bunch of fighters with nothing to hit, a wicca who won't-a, and the brains of our operation wears oven mitts. They rampaged through half the known world until Angel got his soul.</p>
            <div class="social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google"></i></a>
                <a href="#"><i class="fa fa-envelope"></i></a>
              </div></div>

            <div class="item">
              
                <h4 class="item-title">This is the post title</h4>
              <p>Oh my god you will never believe what happened at school today. We're old friends from Navy. Friends from Old Navy. I worked retail, he'd come in, buy slacks I'm not planning on presiding over the end of Western Civilization. She is the slayer. Everyone's a hero in their own way, in their own not that heroic way. Stay away from hyena people, or any loser athletes, or if you see anyone who's invisible. These endless days are finally ending in a blaze. What, you think this isn't real just because of all the vampires, and demons, and ex-vengeance demons, and the sister that used to be a big ball of universe-destroying energy? They need to take seven and they might take yours. I swallowed a bug.</p>
            <div class="social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google"></i></a>
                <a href="#"><i class="fa fa-envelope"></i></a>
              </div>
            </div>

            <div class="item">
                <h4 class="item-title">This is the post title</h4>
              <p>Love keeps her in the air when she ought to fall down. Bunnies aren't just cute like everybody supposes. And I understand with perfect clarity exactly what you are. Occasionally, I'm callous and strange. You can't spend the rest of your life waiting for Xander to wake up and smell the hottie.</p>
            <div class="social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google"></i></a>
                <a href="#"><i class="fa fa-envelope"></i></a>
              </div>
            </div>
          </div>
        </div>
        </article>
      </section>
    )
  }
}
