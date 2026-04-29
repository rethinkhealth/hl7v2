/**
 * Self-signed certificate + key used by Node TLS adapter tests. Both
 * are baked in as constants — generating fresh material at test
 * startup with `openssl` would couple the suite to the host OS, and
 * shelling into Node's `crypto` to do it programmatically requires
 * pulling in extra deps.
 *
 * The cert is for `CN=localhost`, valid for 100 years from generation.
 * It is **only** trusted by the test suite's own TLS server — there
 * is no production exposure.
 */

export const SELF_SIGNED_CERT_PEM = `-----BEGIN CERTIFICATE-----
MIIDCzCCAfOgAwIBAgIUfC3kta/0NJeXF16dSy6ursQxTiswDQYJKoZIhvcNAQEL
BQAwFDESMBAGA1UEAwwJbG9jYWxob3N0MCAXDTI2MDQyOTEzMzc1N1oYDzIxMjYw
NDA1MTMzNzU3WjAUMRIwEAYDVQQDDAlsb2NhbGhvc3QwggEiMA0GCSqGSIb3DQEB
AQUAA4IBDwAwggEKAoIBAQCheI7t2PfDi1fRtWL2Pyh/b6k2agVXbFqASQHgPKjp
2/vxR8ZnNSzkTYQL7qVKvMToa9LGrbRe7wau4xxMiJADGJqI5cSHuFJaOHD/McdN
x/xCrM+GkZIqLZ/9tTNvwFxtmPTIjYZFscDbvXNptLFQFNVM+eWqtQE/jOIDncb6
CyuISJnV4EGWnvpVL83XcVMRetpT7HgdMfdIK/8mTDhFqaXuwG4vNT//QSVTDn/A
PXVGth/28TV7ROBk+/pccR4nXOarSxj7NDj/dI/N3739oFX8yX7JBqKghDVXA7J6
m3EZIzQ+XPPK+UAnQzHGI1+1FoClKEQegBfm7DAkdVhrAgMBAAGjUzBRMB0GA1Ud
DgQWBBRBLpCixn9Gwpk7o0EvjwlhF7tb7jAfBgNVHSMEGDAWgBRBLpCixn9Gwpk7
o0EvjwlhF7tb7jAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQAp
Sh9m/T6zYxPkj94DCErD6yh//uvnM8/jTkc2+nodRzak6ZdIMHihDOHR0ZhOvYaN
BcAP1EWUweVGbrs6FBVA0yVNwqaiLL5yam9R57+BbDCf4+lGjeEodGYVMlx/I4WZ
HPXLtO+0a+PjVnpZHn4AR5iua98r30+dVnhFAeLf4VUUCDpYsa9AuIvRElzu+7UY
R4fBvAvDIsGGbaGjL+ZNYrr2uXaQyj9Ske7VExGXTPcBZmEoZ0/17mHPcJrCF52B
SGw2wueAdQStypOYu1MgHLuIO7c9wF9YHOJj4jebtHFaKg0kU0bXSzZ/AMLiEvMx
uR/9J6KPzQXzrb4a6Ocr
-----END CERTIFICATE-----
`;

export const SELF_SIGNED_KEY_PEM = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCheI7t2PfDi1fR
tWL2Pyh/b6k2agVXbFqASQHgPKjp2/vxR8ZnNSzkTYQL7qVKvMToa9LGrbRe7wau
4xxMiJADGJqI5cSHuFJaOHD/McdNx/xCrM+GkZIqLZ/9tTNvwFxtmPTIjYZFscDb
vXNptLFQFNVM+eWqtQE/jOIDncb6CyuISJnV4EGWnvpVL83XcVMRetpT7HgdMfdI
K/8mTDhFqaXuwG4vNT//QSVTDn/APXVGth/28TV7ROBk+/pccR4nXOarSxj7NDj/
dI/N3739oFX8yX7JBqKghDVXA7J6m3EZIzQ+XPPK+UAnQzHGI1+1FoClKEQegBfm
7DAkdVhrAgMBAAECggEATGIVatpKSkxuXJurlsVFyRLvPvhkUnjFTw46PvMzDH2t
7vN/HW+ALvekUWiw9Gvb0f6/lJCzVH1J8g0pY+LuDSjkYYIft/wvqNIuUeogV+EU
qg3JleTi+eTfXEsNa/3ZO1cx5HVeYTW2/7vdDtIVVsakKGfGhzxcvM1OVVubtsg0
3kzEIOWGP21ha0a0lqRaptkIac9gR97Rwc8OqfOeSHz5GDKCJ5neF0vmnVUh14oJ
R4e4qde9NYCmHNVWPLWzgJNMkXa1hUKXLtjrvQdNJcifXxnO0fkSba3QUoLY/o8e
kil+QoHMbNDHhi6ke6e0BVE1wyTO7DfsIm9ppxvQkQKBgQDddbqcwAgt2Kmm6rSv
yegDDRU9iygCPRVuyL0+q8/Qb0N83Fv6EMG6fpT61FXwe3/Brd2DYYRTdY2CCokM
64ib5atXULDht7j5DGHQ57TeaCbx0ylThgZfCn0kJ3BcNGQckbTa9h0DmnI2u41l
MDUHGuIjmZDlLsF+IVbuYi34RwKBgQC6p6Oeq+cc5mghrwR1MRXlBc2lnON9002e
eWGij7SavG1QnaJZYVIQhE5Pxpz0CbNfdNXE+67q/wuddi6pcrm0EFLNuZpfdiYT
9UCaavCjylc+veNek2nsj92QlJJuyZvqA0boRQdiChIKkaCa1v+0w7aXo0cGRnEP
PZGW/SSUvQKBgQCJvcHV4PK1YT8T3IOJmrE9xJNjdfvqeIeuIhjitAZLhAibzos+
m9GC51xOLmdNbeLmWfee0bZ2GnVrXpYjfRO4sz7AziVWHuljrbnhL1ylwG4Ilufr
VT79Og7fv8/46XUi99VfIxiktxk2xayKNVOmGahxsAAZK92ZT688EcC53QKBgBtY
Lcc0BdKdCopMuol0nHGFzR/DASzQxOE/hQcsqFe23QjfXwZbFIuo5lQXk6zIswd7
9Uk7Wd/BZ3E0/BcE4KG5dnf/BdeQVnm8By/YFNLZ9LgTV3jmfbETTnE84srqLDY3
Lq8eVbuOICB+PxoP/zv7JAfI+sG3lh6WdXq6MR69AoGAVMtj3IJZMfsgEL2OLSVd
UDJNviX2Ah/5dNftc7pyJZWMbu7azRuyzfDnEaXZ7RjI1vN2UzfQt+dtdJSKW6LB
dlPyZ2iuYw73IKk9Va1PDe5U2/06ADY61pY2vjZuhcAkq9GRkY6UvE5P6eQ1LAiU
385+WdlMCwueYadEROHliG0=
-----END PRIVATE KEY-----
`;
